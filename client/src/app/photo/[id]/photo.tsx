'use client'

import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { usePhotos } from '../../../../Hooks/usePhotos'
import axios from 'axios'
import Image from 'next/image'

type Props = {
	currentId: string
}
const Photo = ({ currentId }: Props) => {
	const AllPhotos = usePhotos()

	const { thumbnailUrl, title } = AllPhotos[Number(currentId) - 1] || ''

	const [edit, setEdit] = useState(false)
	const [titleName, setTitleName] = useState<string>(title)

	useEffect(() => {
		setTitleName(title)
	}, [title])

	const updateBtn = (event: any) => {
		event.preventDefault(), setEdit(false)

		// axios.put('http://localhost:8081/update/' + currentId, titleName)

		toast.success('updated successfully!!')
	}
	return (
		<div className='flex p-5 items-center gap-4 flex-col'>
			<div className='max-w-[400px]'>
				<Image className='w-full' src={thumbnailUrl || 'photo'} alt={title || 'photoalt'} width={10} height={10} unoptimized={true} data-testid='image' />
			</div>

			<h1 data-testid='image-title'>{titleName}</h1>
			<button className='bg-purple-700 py-2 text-white cursor-pointer hover:bg-purple-300 hover:border-2 hover:border-purple-900 hover:text-purple-900 px-6 rounded-lg shadow-md' onClick={() => setEdit(true)} data-testid='editbtn'>
				edit title
			</button>

			{edit && (
				<>
					<input className='border-2 border-purple-400 px-5 py-2' onChange={(e) => setTitleName(e.target.value)} data-testid='editbtn' />
					<button className='bg-purple-700 py-2 text-white cursor-pointer hover:bg-purple-300 hover:border-2 hover:border-purple-900 hover:text-purple-900 px-6 rounded-lg shadow-md' onClick={updateBtn} data-testid='editbtn'>
						Update title
					</button>
				</>
			)}
		</div>
	)
}

export default Photo
