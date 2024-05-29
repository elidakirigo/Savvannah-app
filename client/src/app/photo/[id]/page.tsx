'use client'

import Image from 'next/image'
import { useAlbumPhotos, usePhotos } from '../../../../Hooks/usePhotos'
import { useEffect, useState } from 'react'

type Props = {
	params: {
		id: string
	}
}

const Page = ({ params: { id } }: Props) => {
	const AllPhotos = usePhotos()

	const { thumbnailUrl, title } = AllPhotos[Number(id) - 1] || ''

	const [edit, setEdit] = useState(false)
	const [titleName, setTitleName] = useState<string>(title)

	useEffect(() => {
		setTitleName(title)
	}, [title])

  
	const updateBtn = () => {
		setEdit(false)
	}

	return (
		<div className='flex p-5 items-center gap-4 flex-col'>
			<div className='max-w-[400px]'>
				<Image className='w-full' src={thumbnailUrl} alt={title} width={10} height={10} unoptimized={true} />
			</div>

			<h1>{titleName}</h1>
			<button className='bg-purple-700 py-2 text-white cursor-pointer hover:bg-purple-300 hover:border-2 hover:border-purple-900 hover:text-purple-900 px-6 rounded-lg shadow-md' onClick={() => setEdit(true)}>
				edit title
			</button>

			{edit && (
				<>
					<input className='border-2 border-purple-400 px-5 py-2' onChange={(e) => setTitleName(e.target.value)} />
					<button className='bg-purple-700 py-2 text-white cursor-pointer hover:bg-purple-300 hover:border-2 hover:border-purple-900 hover:text-purple-900 px-6 rounded-lg shadow-md' onClick={updateBtn}>
						Update title
					</button>
				</>
			)}
		</div>
	)
}

export default Page
