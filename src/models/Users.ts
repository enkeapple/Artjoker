import { Http } from 'services'
import { sortBy } from 'lodash'
import moment from 'moment'
import { IUser, IHttpResult } from 'types/Http'

export default class Users {
	private _http: Http

	constructor(http: Http) {
		this._http = http
	}

	fetchData(): Promise<any> {
		return this._http.getData().then((response: IHttpResult) => {
			response.result?.map((user: IUser) => {
				const age = `${moment().diff(user.dob, 'year', false)}`
				user.dob = age
				return user
			})
			const users = response.result?.reduce((prev: any, next: any) => {
				const title = next.first_name[0].toUpperCase()
				if (!prev[title]) prev[title] = { title, data: [next] }
				else prev[title].data.push(next)
				return prev
			}, {})

			return sortBy(Object.values(users), ['title'])
		})
	}
}
