import { Http } from 'services'
import { sortBy, minBy, maxBy } from 'lodash'
import moment from 'moment'
import { IUser, IHttpResult, ISection } from 'types/Http'
import { observable, action } from 'mobx'

class Users {
	@observable private _http: Http = new Http('https://gorest.co.in/public-api/users')
	@observable private _data: ISection[] = observable([])
	@observable fromAge: any = null
	@observable toAge: any = null

	get data(): ISection[] {
		return this._data
	}

	get http(): Http {
		return this._http
	}

	@action getUserList(): ISection[] {
		return this.data
	}

	@action setUserList(id: number | null) {
		this._data.map((section: ISection) => {
			section.data = section.data.filter((element) => Number(element.id) !== Number(id))
			return section
		})
	}

	@action fetchUserList(): Promise<ISection[]> {
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
		this.fromAge = this.fromAge ? this.fromAge : minBy(response.result, 'dob').dob
		this.toAge = this.toAge ? this.toAge : maxBy(response.result, 'dob').dob
		const users = response.result?.reduce((prev: any, next: any) => {
			const title = next.first_name[0].toUpperCase()
			if (!prev[title]) prev[title] = { title, data: [next] }
			else prev[title].data.push(next)
			return prev
		}, {})
		this._data = sortBy(Object.values(users), ['title'])
		return this._data
	}

	@action.bound fetchError(_error: string) {
		return this._data
	}
}

export default new Users()
