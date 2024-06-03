"use client";

import { signIn, useSession } from "next-auth/react";

function LandingPage() {
  const { data: session } = useSession();

  return (
    <>
      <div
        data-testid="landingpage"
        className="flex top-16 p-8 relative justify-start items-center flex-col text-center "
      >
        <h1 className="text-[25px] md:text-[40px] pb-5 ">
          Welcome to Savannah App
        </h1>
        <p className="max-w-[700px] " data-testid="description">
          This web application allows users to manage and view user information,
          albums, and photos through a responsive and polished interface.
          <span>
            <strong> Key features include:</strong>
            <strong>Landing Page: </strong>
            <strong>Authentication:</strong> Secure login via Google.
            <strong>User Management:</strong>
            <strong>User List: </strong>Displays all users and their album
            counts.
            <strong>User Detail:</strong> Shows user information and their
            albums.
            <strong>Album Management: </strong>Album Detail: Lists details of
            selected albums and photos.
            <strong>Photo Management:</strong> Photo Detail: Allows editing of
            photo titles with backend updates.
          </span>
        </p>

        {/* sign in section */}
        {!session && (
          <button
            data-testid="signinbtn"
            onClick={() => signIn("google")}
            className="text-white font-bold text-3xl bg-purple-500 animate-pulse border-[1px] rounded-lg p-5 mt-6"
          >
            Sign In to use Savannah App
          </button>
        )}
      </div>
    </>
  );
}

export default LandingPage;
