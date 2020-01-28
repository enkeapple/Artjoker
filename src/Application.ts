import { AppRegistry } from 'react-native'
import { name as appName } from '../app.json'
import AppContainer from './Navigator'
import { Localize } from './models'

export default class Application {
	private static _instance: Application

	static get instance(): Application {
		if (!Application._instance) {
			Application._instance = new Application()
		}
		return Application._instance
	}

	bootstrap = () => {
		Localize.setLocale()
		AppRegistry.registerComponent(appName, () => AppContainer)
	}
}
