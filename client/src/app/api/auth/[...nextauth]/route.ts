import { NextAuthOptions } from "next-auth";
import NextAuth, { getServerSession } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

 const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
        },
      },
    }),
    // TwitterProvider({
    // 	clientId: process.env.TWITTER_ID!,
    // 	clientSecret: process.env.TWITTER_SECRET!,
    // }),
  ],
  secret: process.env.AUTH_SECRET,
};
// export const getAuth = () => getServerSession(authOptions)
// const handler = NextAuth(authOptions);
export default NextAuth(authOptions)
// export { handler as GET, handler as POST };
