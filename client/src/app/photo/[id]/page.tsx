import axios from 'axios'
import Photo from './photo'
import { Allphotos } from '@/app/types/users'

type Props = {
	params: {
		id: string
	}
}

export async function generateStaticParams() {
	const { data: photo } = await axios.get(process.env.NEXT_PUBLIC_URL + '/photos')

	return photo?.map(({ id }: Allphotos) => ({
		id: id.toString(),
	}))
}

const Page = ({ params: { id } }: Props) => {
	return <Photo currentId={id} />
}

export default Page
