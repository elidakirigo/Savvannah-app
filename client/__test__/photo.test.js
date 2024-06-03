import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import * as nextAuthReact from "next-auth/react";
import Photo from "../src/app/photo/[id]/photo";
import StoreProvider from "../components/StoreProvider";
import { mockSession, AllPhotos } from "./mocks/data";
import { usePhotos } from "../Hooks/usePhotos";

jest.mock("next-auth/react");

jest.mock("../Hooks/usePhotos");

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

describe("renders the photo page", () => {
  beforeEach(() => {
    nextAuthReactMocked.useSession.mockImplementation((_options) => {
      return { data: mockSession, status: "authenticated" };
    });

    nextAuthReactMocked.signIn.mockImplementation(() =>
      Promise.resolve({ error: "", status: 200, ok: true, url: "" }),
    );

    usePhotos.mockReturnValue(AllPhotos);

    render(
      <StoreProvider>
        <Photo currentId="1" />
      </StoreProvider>,
    );
  });

  it("should render Albumpage successfully", async () => {
    await waitFor(() => {
      const { container } = render(
        <StoreProvider>
          <Photo currentId="1" />
        </StoreProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  it("should have Image ", async () => {
    await waitFor(() => {
      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();
    });
  });

  it("should have image src", async () => {
    await waitFor(() => {
      const testImage = document.querySelector("img");
      expect(testImage.src).toContain("https://");
    });
  });
});
