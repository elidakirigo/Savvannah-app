'use client'

import { useRouter } from 'next/navigation'
import { useAlbumPhotos } from '../../../../Hooks/usePhotos'
import Image from 'next/image'
import axios from 'axios'
import { useUserAlbum } from '../../../../Hooks/useUlbums'

type Props = {
	params: {
		id: string
	}
}

// export async function generateStaticParams() {
// 	const { allUserdata } = useUserAlbum()

//   const albumIds = allUserdata

// 	// return albumIds.map((post) => ({
// 	// 	slug: post.slug,
// 	// }))
// }
const Page = ({ params: { id } }: Props) => {
	const AlbumPhotos = useAlbumPhotos()
	const router = useRouter()

	const currentAlbum = AlbumPhotos[Number(id) - 1]

	return (
		<div className='relative overflow-x-auto shadow-lg sm:rounded-lg m-5 max-w-[900px] border-[2px]'>
			<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 '>
				<thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
					<tr>
						<th scope='col' className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>
							image title
						</th>
						<th scope='col' className='px-6 py-3'>
							image
						</th>
						<th scope='col' className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>
							image id
						</th>
						<th scope='col' className='px-6 py-3'>
							album id
						</th>
					</tr>
				</thead>
				<tbody>
					{currentAlbum?.map(({ thumbnailUrl, title, id, url, albumId }) => (
						<tr className='border-b border-gray-200 dark:border-gray-700 cursor-pointer' onClick={() => router.push('/photo/' + id)} key={id}>
							<th scope='row' className='px-6 py-4 font-medium text-gray-900 max-w-36 bg-gray-50 dark:text-white dark:bg-gray-800 hover:bg-slate-500'>
								{title}
							</th>
							<td className='px-6 py-4 hover:bg-slate-600'>
								<Image src={thumbnailUrl} alt={title} width={50} height={50} unoptimized={true} />
							</td>
							<td className='px-6 py-4 bg-gray-50 dark:bg-gray-800'>{id}</td>
							<td className='px-6 py-4'>{albumId}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Page
