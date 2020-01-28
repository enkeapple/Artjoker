import { AppRegistry } from 'react-native'
import { name as appName } from '../app.json'
import { Localize, Http } from './services'
import { Users } from './models'
import StackNavigator from './Navigator'

export default class Application {
	private static _instance: Application

	private _http: Http = new Http('https://gorest.co.in/public-api/users')
	private _model = new Users(this.http)

	static get instance(): Application {
		if (!Application._instance) {
			Application._instance = new Application()
		}
		return Application._instance
	}

	get http(): Http {
		return this._http
	}

	get model(): Users {
		return this._model
	}

	fetchData() {
		return this.model.fetchData()
	}

	bootstrap = (): void => {
		Localize.setLocale()
		AppRegistry.registerComponent(appName, StackNavigator)
	}
}
