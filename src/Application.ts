import { AppRegistry } from 'react-native'
import { NavigationContainerComponent } from 'react-navigation'
import { name as appName } from '../app.json'
import AppContainer from './Navigator'
import { Wrapper } from './elements'
import { Localize, Http } from './services'
import { Users } from './models'

export default class Application {
	private static _instance: Application

	private _http: Http = new Http('https://gorest.co.in/public-api/users')
	private _navigator: NavigationContainerComponent | null = null
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

	get navigator(): NavigationContainerComponent {
		if (!this._navigator) {
			throw new Error('Navigator still not settled')
		}
		return this._navigator
	}

	get model(): Users {
		return this._model
	}

	fetchData() {
		return this.model.fetchData()
	}

	setNavigator(navigator: NavigationContainerComponent) {
		this._navigator = navigator
	}

	bootstrap = (): void => {
		Localize.setLocale()
		AppRegistry.registerComponent(appName, Wrapper(this, AppContainer))
	}
}
