import axios, { AxiosInstance } from 'axios'
import { IHttpResult } from 'types/Http'

export default class Http {
	private _endpoint: string = ''
	private _adapter: AxiosInstance = axios.create({
		baseURL: 'https://gorest.co.in',
		headers: {
			Accept: 'application/json, text/plain, */*',
			Authorization: 'Bearer XjOt726H1KeiQO63WuqRtMngwh9SKPozEr_5',
		},
	})

	constructor(config: string) {
		this._endpoint = config
	}

	get endpoint(): string {
		return this._endpoint
	}

	get adapter(): AxiosInstance {
		return this._adapter
	}

	async getData(): Promise<IHttpResult> {
		const result = await this._adapter.get(this._endpoint)
		return result.data
	}
}
