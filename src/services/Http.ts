import axios from 'axios'
import { IHttpResult } from 'types/Http'

export default class Http {
	private _endpoint: string
	private _adapter = axios.create({
		baseURL: 'https://gorest.co.in',
		headers: {
			Accept: 'application/json, text/plain, */*',
			Authorization: 'Bearer XjOt726H1KeiQO63WuqRtMngwh9SKPozEr_5',
		},
	})

	constructor(endpoint: string) {
		this._endpoint = endpoint
	}

	getData(): Promise<IHttpResult> {
		return this._adapter.get(this._endpoint).then((result) => result.data)
	}
}
