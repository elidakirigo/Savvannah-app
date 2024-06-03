export const users = [{ address: { street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874' }, company: { name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets' }, email: 'Sincere@april.biz', id: 1, name: 'Leanne Graham', phone: '1-770-736-8031 x56442', username: 'Bret', website: 'hildegard.org' }]

export const mockSession = {
	expires: new Date(Date.now() + 2 * 86400).toISOString(),
	user: { name: 'moon pie', email: 'wakamoonpie@gmail.com', image: 'https://lh3.googleusercontent.com/a/ACg8ocLTSwAi2PRqfpYSuak05Q2jiRKBnYqL4wv88UJqLxzmel3jXw=s96-c' },
}

export const mockUsers = [
	{
		id: 1,
		name: 'Leanne Graham',
		username: 'Bret',
		email: 'Sincere@april.biz',
		address: {
			street: 'Kulas Light',
			suite: 'Apt. 556',
			city: 'Gwenborough',
			zipcode: '92998-3874',
			geo: {
				lat: '-37.3159',
				lng: '81.1496',
			},
		},
		phone: '1-770-736-8031 x56442',
		website: 'hildegard.org',
		company: {
			name: 'Romaguera-Crona',
			catchPhrase: 'Multi-layered client-server neural-net',
			bs: 'harness real-time e-markets',
		},
	},
]

export const mocksetUsers = jest.fn()

export const allUserdata = [
	{
		currentAlbums: [
			{ userId: 1, id: 1, title: 'quidem molestiae enim' },
			{ userId: 1, id: 2, title: 'sunt qui excepturi placeat culpa' },
			{ userId: 1, id: 3, title: 'omnis laborum odio' },
			{ userId: 1, id: 4, title: 'non esse culpa molestiae omnis sed optio' },
			{ userId: 1, id: 5, title: 'eaque aut omnis a' },
			{ userId: 1, id: 6, title: 'natus impedit quibusdam illo est' },
			{ userId: 1, id: 7, title: 'quibusdam autem aliquid et et quia' },
			{ userId: 1, id: 8, title: 'qui fuga est a eum' },
			{ userId: 1, id: 9, title: 'saepe unde necessitatibus rem' },
			{ userId: 1, id: 10, title: 'distinctio laborum qui' },
		],
		email: 'Sincere@april.biz',
		id: 1,
		name: 'Leanne Graham',
		noOfAlbums: 10,
		phone: '1-770-736-8031 x56442',
		username: 'Bret',
		website: 'hildegard.org',
	},
]

export const AlbumPhotos = [[{ albumId: 1, id: 1, thumbnailUrl: 'https://via.placeholder.com/150/92c952', title: 'accusamus beatae ad facilis cum similique qui sunt', url: 'https://via.placeholder.com/600/92c952' }]]

export const AllPhotos = [{ albumId: 1, id: 1, thumbnailUrl: 'https://via.placeholder.com/150/92c952', title: 'accusamus beatae ad facilis cum similique qui sunt', url: 'https://via.placeholder.com/600/92c952' }]

export const UserData = [{ users: allUserdata[0] }]

export const user = allUserdata

module.exports = { mockSession, allUserdata, AlbumPhotos, AllPhotos, UserData, user }
