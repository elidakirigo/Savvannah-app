import React from 'react'

export default function page() {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((json) => console.log(json))
	return <div>hello</div>
}
