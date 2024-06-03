const users = [{ address: { street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874' }, company: { name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets' }, email: 'Sincere@april.biz', id: 1, name: 'Leanne Graham', phone: '1-770-736-8031 x56442', username: 'Bret', website: 'hildegard.org' }]

export default async function mockFetch(url) {
	if (url.startsWith('https://api.nationalize.io') && url.includes('john')) {
		return {
			ok: true,
			status: 200,
			json: async () => nameNationalizeResponse,
		}
	}

	throw new Error(`Unhandled request: ${url}`)
}
