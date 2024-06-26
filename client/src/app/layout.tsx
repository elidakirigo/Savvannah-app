import { Poppins } from "next/font/google";
import { SessionProvider } from "../../components/SessionProvider";
import { ToastContainer } from "react-toastify";
import LandingPage from "./landingPage";
import Navbar from "../../components/navbar";
import StoreProvider from "../../components/StoreProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/authoptions";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Savannah App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* session setup */}
        <SessionProvider session={session}>
          <StoreProvider>
            {/* navbar */}
            <Navbar />
            {/* content page */}
            {!session ? <LandingPage /> : <>{children}</>}
            <ToastContainer />
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
