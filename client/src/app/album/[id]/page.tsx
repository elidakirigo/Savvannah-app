import axios from 'axios'
import { Allalbums } from '@/app/types/users'
import Album from './Album'

type Props = {
	params: {
		id: string
	}
}

export async function generateStaticParams() {
	const { data: albums } = await axios.get(process.env.NEXT_PUBLIC_URL + '/albums')

	return albums?.map(({ id }: Allalbums) => ({
		id: id.toString(),
	}))
}

const Page = ({ params: { id } }: Props) => {
	return <Album currentId={id} />
}

export default Page
