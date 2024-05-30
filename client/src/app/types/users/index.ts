export type AllUsers = {
	id: number
	name: string
	email: string
}
export type Allalbums = {
	userId: number
	id: number

}
export type Allphotos = {
	id: number
	albumId: number
	email: string
}