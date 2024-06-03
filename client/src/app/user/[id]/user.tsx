'use client'

import { Allalbums } from '@/app/types/users'
import { useRouter } from 'next/navigation'
import { useUserAlbum } from '../../../../Hooks/useUlbums'

type Props = {
	currentId: string
}

const User = ({ currentId }: Props) => {
	const router = useRouter()
	const { allUserdata } = useUserAlbum()

	const currentUser = allUserdata[Number(currentId) - 1]

	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg max-w-[1000px] m-5'>
			<h1 className='text-[30px]' data-testid='username'>
				name : {currentUser?.name}
			</h1>
			<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-8'>
				<thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
					<tr>
						<th scope='col' className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>
							Album title
						</th>
						<th scope='col' className='px-6 py-3'>
							ID
						</th>
					</tr>
				</thead>
				<tbody>
					{currentUser?.currentAlbums.map(({ title, id }) => (
						<tr className='border-b border-gray-200 dark:border-gray-700 cursor-pointer ' onClick={() => router.push(`/album/${id}`)} key={id}>
							<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 hover:bg-slate-500 dark:text-white dark:bg-gray-800' data-testid='username'>
								{title}
							</th>
							<td className='px-6 py-4'>{id}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default User
