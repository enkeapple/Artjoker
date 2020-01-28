import { observable } from 'mobx'
import { Http } from 'services'
import { IUser } from 'types/Http'

export default class Users {
	@observable _users?: IUser[] = []

	private _http: Http

	constructor(http: Http) {
		this._http = http
	}

	fetchData = async (): Promise<any> => {
		try {
			const response = await this._http.getData()
			const { code } = response._meta
			if (code === 200) {
				return response.result
			}
		} catch (error) {
			return []
		}
	}
}
