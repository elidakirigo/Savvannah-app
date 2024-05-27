'use client'

import { useRouter } from 'next/navigation'
import { useAlbumPhotos } from '../../../../Hooks/usePhotos'
import Image from 'next/image'

type Props = {
	params: {
		id: string
	}
}
const Page = ({ params: { id } }: Props) => {
	const AlbumPhotos = useAlbumPhotos()
	const router = useRouter()

	const currentAlbum = AlbumPhotos[Number(id) - 1]

	return (
		<div className='max-w-[] flex flex-wrap gap-5 p-4'>
			{currentAlbum?.map(({ thumbnailUrl, title, id, url }) => (
				<div className='max-w-[250px] rounded overflow-hidden shadow-lg cursor-pointer' onClick={() => router.push('/photo/' + id)} key={id}>
					<Image className='w-full' src={thumbnailUrl} alt={title} />
					<div className='py-4'>
						<div className='font-semibold  mb-2'>
							<div className='px-6 pt-4 pb-2'>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{id}</span>
								{title}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Page
