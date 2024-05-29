import { NextAuthOptions, getServerSession } from 'next-auth'
import NextAuth from 'next-auth/next'
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
// export const getAuth = async () => await getServerSession(authOptions)
const handler = NextAuth(authOptions)
// export default NextAuth(authOptions)
export { handler as GET, handler as POST }
