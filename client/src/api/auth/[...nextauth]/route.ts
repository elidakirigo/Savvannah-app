import { NextAuthOptions } from 'next-auth'
import NextAuth, { getServerSession } from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			authorization: {
				params: {
					prompt: 'consent',
				},
			},
		}),
	],
	secret: process.env.AUTH_SECRET,
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
