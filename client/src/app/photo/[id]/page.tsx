type Props = {
	params: {
		id: string
	}
}

const Page = ({ params: { id } }: Props) => {
	return <div>photo {id}</div>
}

export default Page
