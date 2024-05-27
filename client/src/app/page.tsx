"use client";

import { signIn, useSession } from "next-auth/react";
import LandingPage from "./landingPage";

function Homepage() {
  const { data: session } = useSession();

  return (
		<LandingPage/>
  )
}

export default Homepage;
