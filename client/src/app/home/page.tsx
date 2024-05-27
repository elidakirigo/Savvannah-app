'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useUserAlbum } from '../../../Hooks/useUlbums'

const Page = () => {
	const { data: session } = useSession()
	const router = useRouter()

	const { allUserdata } = useUserAlbum()

	if (!session) return router.replace('/')

	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg max-w-[1000px] m-5 '>
			<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Name
						</th>
						<th scope='col' className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>
							User ID
						</th>
						<th scope='col' className='px-6 py-3'>
							No of Albums
						</th>
						<th scope='col' className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>
							Email
						</th>
					</tr>
				</thead>
				<tbody>
					{allUserdata.map(({ id, name, email, noOfAlbums }) => (
						<tr className='border-b border-gray-200 dark:border-gray-700 cursor-pointer' onClick={() => router.replace('/user/' + id)} key={id}>
							<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 hover:bg-slate-300'>
								{name}
							</th>
							<td className='px-6 py-4 '>{id}</td>
							<td className='px-6 py-4 bg-gray-50 dark:bg-gray-800 '>{noOfAlbums}</td>
							<td className='px-6 py-4'>{email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Page
