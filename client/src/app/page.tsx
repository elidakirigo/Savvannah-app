'use client'
import { signOut } from "next-auth/react"


function Homepage() {
	return (
	<div>hello

		<button onClick={()=>signOut()}>signout</button>
	</div>
	)
}

export default Homepage
