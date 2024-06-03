import NextAuth from "next-auth/next";
import { authOptions } from "../../authoptions";

// export const getAuth = async () => await getServerSession(authOptions)
const handler = NextAuth(authOptions);
// export default NextAuth(authOptions)
export { handler as GET, handler as POST };

// export async function generateStaticParams() {
// 	return [{nextauth:'index'}]
// }
