import { Http } from 'services'
import { sortBy } from 'lodash'
import moment from 'moment'
import { IUser, IHttpResult, ISection } from 'types/Http'
import { observable, action } from 'mobx'

export default class Users {
	private _http: Http = new Http('https://gorest.co.in/public-api/users')
	private _user: ISection[] = observable([])

	get http(): Http {
		return this._http
	}

	get users(): ISection[] {
		return this._user
	}

	@action getUserList(): ISection[] {
		return this.users
	}

	@action fetchUserList(): Promise<any> {
		return this.http
			.getData()
			.then(this.fetchSuccess)
			.catch(this.fetchError)
	}

	@action.bound fetchSuccess(response: IHttpResult) {
		response.result?.map((user: IUser) => {
			const age = `${moment().diff(user.dob, 'year', false)}`
			user.dob = age
		})
		const users = response.result?.reduce((prev: any, next: any) => {
			const title = next.first_name[0].toUpperCase()
			if (!prev[title]) prev[title] = { title, data: [next] }
			else prev[title].data.push(next)
			return prev
		}, {})
		this._user = sortBy(Object.values(users), ['title'])
		return this._user
	}

	@action.bound fetchError(_error: string) {
		return this._user
	}
}
