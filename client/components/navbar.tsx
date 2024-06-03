"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className=" w-full bg-purple-600 text-white p-3  flex items-center justify-start">
      {!session ? (
        <div>
          <Link
            href={"/"}
            data-testid="title"
            className=" text-white p-3 mx-auto"
          >
            Savannah App
          </Link>
        </div>
      ) : (
        <>
          <Link
            href={"/"}
            className="flex flex-row-reverse gap-4 items-center justify-center"
          >
            <h1 data-testid="username">{session.user?.name} </h1>
            <Image
              alt="user"
              src={session?.user?.image! || "user"}
              width={30}
              height={30}
              unoptimized={true}
              className="rounded-full ml-1"
              data-testid="userImg"
            />
          </Link>

          <div>
            <Link
              href={"/home"}
              className=" text-white p-3 mx-auto"
              data-testid="home"
            >
              Home
            </Link>
            <button onClick={() => signOut()} data-testid="signOut">
              signOut
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
