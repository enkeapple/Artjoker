export interface IHttpResult {
	_meta: IMeta
	result?: IUser[]
}

interface IMeta {
	success: boolean
	code: number
	message: string
	totalCount: number
	pageCount: number
	currentPage: number
	perPage: number
	rateLimit: {
		limit: number
		remaining: number
		reset: number
	}
}

export interface IUser {
	id: number
	first_name: string
	last_name: string
	gender: string
	dob: string
	email: string
	phone: string
	website: string
	address: string
	string: string
	_links: {
		self: ILink
		edit: ILink
		avatar: ILink
	}
}

interface ILink {
	href: string
}
