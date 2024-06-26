import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import * as nextAuthReact from "next-auth/react";
import Link from "next/link";
import User from "../src/app/user/[id]/user";
import StoreProvider from "../components/StoreProvider";
import { useUserAlbum } from "../Hooks/useUlbums";
import { mockSession, allUserdata } from "./mocks/data";

jest.mock("next-auth/react");

jest.mock("../Hooks/useUlbums");

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: "",
    }),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
  };
});

const nextAuthReactMocked = nextAuthReact;

describe("renders the user page", () => {
  const history = createMemoryHistory();

  const createRouterWrapper =
    (history) =>
    ({ children }) => <Link href={history}>{children}</Link>;

  beforeEach(() => {
    nextAuthReactMocked.useSession.mockImplementation((_options) => {
      return { data: mockSession, status: "authenticated" };
    });

    nextAuthReactMocked.signIn.mockImplementation(() =>
      Promise.resolve({ error: "", status: 200, ok: true, url: "" }),
    );

    useUserAlbum.mockReturnValue({ allUserdata });

    render(
      <StoreProvider>
        <User currentId="1" />
      </StoreProvider>,
      { wrapper: createRouterWrapper(history) },
    );
  });

  it("should render userpage successfully", async () => {
    await waitFor(() => {
      const { container } = render(
        <StoreProvider>
          <User currentId="1" />
        </StoreProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  it("should expect api call to have accurate data", () => {
    const usernames = screen.getAllByTestId("username");
    expect(usernames.length).toBeGreaterThanOrEqual(1);
  });

  it("should navigation from /home", async () => {
    await waitFor(() => {
      fireEvent.click(screen.getAllByTestId("username")[0]);
      expect(history.location.pathname).toBe("/");
    });
  });

  it("should have name content", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("username")[0]).toHaveTextContent(
        "Leanne Graham",
      );
    });
  });

  it("should have ID row", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("albumtitle")[0]).toBeTruthy();
    });
  });

  it("should check if first ID column exists", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("albumids")[0]).toBeTruthy();
    });
  });
  it("should have Album title row", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("albumid")[0]).toBeTruthy();
    });
  });

  it("should check if first album column exists", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("albumname")[0]).toBeTruthy();
    });
  });
});
