import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import * as nextAuthReact from "next-auth/react";
import Homepage from "@/app/page";
import Navbar from "../components/navbar";
import StoreProvider from "../components/StoreProvider";
import { useSession } from "next-auth/react";
import { mockSession } from "./mocks/data";

global.window.URL.createObjectURL = jest.fn();

HTMLAnchorElement.prototype.click = jest.fn();

jest.mock("next-auth/react");

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

describe("homepage render", () => {
  nextAuthReactMocked.useSession.mockImplementation((_options) => {
    return { data: mockSession, status: "authenticated" };
  });

  nextAuthReactMocked.signIn.mockImplementation(() =>
    Promise.resolve({ error: "", status: 200, ok: true, url: "" }),
  );

  it("renders correctly", () => {
    const { container } = render(
      <StoreProvider>
        <Homepage />
      </StoreProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

describe("Test Auth component not logged in", () => {
  beforeEach(() => {
    nextAuthReactMocked.useSession.mockImplementation((_options) => {
      return { data: null, status: 403 };
    });

    nextAuthReactMocked.signIn.mockImplementation(() =>
      Promise.resolve({ error: "", status: 403, ok: false, url: "" }),
    );

    nextAuthReactMocked.signOut.mockImplementation(() =>
      Promise.resolve({ error: "", status: 200, ok: true, url: "" }),
    );

    useSession.mockReturnValueOnce([{ data: null }, { status: 403 }]);

    render(
      <StoreProvider>
        <Navbar />
        <Homepage />
      </StoreProvider>,
    );
  });

  it("Shows landing page without session component", async () => {
    await waitFor(() => {
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
    });
  });

  it("title is present", () => {
    const title = screen.getByText("Welcome to Savannah App");
    expect(title).toBeInTheDocument();
  });

  it("should have a description", () => {
    const description = screen.getByTestId("description");
    expect(description).toHaveTextContent(" ");
  });

  it("should show sign in button", () => {
    const signinbtn = screen.getByTestId("signinbtn");
    expect(signinbtn).toBeVisible();
  });

  it("should render title when not logged in", () => {
    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("Savannah App");
  });

  it("should not render home when not logged in", () => {
    const home = screen.queryByTestId("home");
    expect(home).toBeNull();
  });

  it("should not render username when not logged in", () => {
    const home = screen.queryByTestId("home");
    expect(home).toBeNull();
  });

  it("should not render user image when not logged in", () => {
    const userImg = screen.queryByTestId("userImg");
    expect(userImg).toBeNull();
  });

  it("should not render signout when not logged in", () => {
    const signOut = screen.queryByTestId("signOut");
    expect(signOut).toBeNull();
  });
});

describe("Test Auth component when logged in", () => {
  beforeEach(() => {
    nextAuthReactMocked.useSession.mockImplementation((_options) => {
      return { data: mockSession, status: "authenticated" };
    });

    nextAuthReactMocked.signIn.mockImplementation(() =>
      Promise.resolve({ error: "", status: 200, ok: true, url: "" }),
    );

    render(
      <StoreProvider>
        <Homepage />
      </StoreProvider>,
    );
  });

  it("Shows landing page session component", async () => {
    await waitFor(() => {
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
    });
  });

  it("title is present", () => {
    const title = screen.getByText("Welcome to Savannah App");
    expect(title).toBeInTheDocument();
  });

  it("should have a description", () => {
    const description = screen.getByTestId("description");
    expect(description).toHaveTextContent(" ");
  });
  it("should show not sign in button", async () => {
    await waitFor(() => {
      const signinbtn = screen.queryByTestId("signinbtn");
      expect(signinbtn).toBeNull();
    });
  });
});

describe("navbar when logged in", () => {
  beforeEach(() => {
    nextAuthReactMocked.useSession.mockImplementation((_options) => {
      return { data: mockSession, status: "authenticated" };
    });

    nextAuthReactMocked.signIn.mockImplementation(() =>
      Promise.resolve({ error: "", status: 200, ok: true, url: "" }),
    );

    render(
      <StoreProvider>
        <Navbar />
      </StoreProvider>,
    );
  });

  it("should not render title when logged in", () => {
    const title = screen.queryByTestId("title");
    expect(title).toBeNull();
  });

  it("should render home when logged in", () => {
    const home = screen.queryAllByTestId("home")[0];
    expect(home).toBeTruthy();
  });

  it("should render username when logged in", () => {
    const home = screen.queryAllByTestId("home")[0];
    expect(home).toBeTruthy();
  });

  it("should render user image when logged in", () => {
    const userImg = screen.queryAllByTestId("userImg")[0];
    expect(userImg).toBeTruthy();
  });

  it("renders signout when logged in", () => {
    const signOut = screen.queryAllByTestId("signOut")[0];
    expect(signOut).toHaveTextContent("signOut");
  });
});

describe("Navbar render", () => {
  it("renders correctly", () => {
    const { container } = render(
      <StoreProvider>
        <Navbar />
      </StoreProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
