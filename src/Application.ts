import { AppRegistry } from 'react-native'
import { name as appName } from '../app.json'
import { Localize } from './services'
import StackNavigator from './Navigator'

export default class Application {
	private static _instance: Application

	static get instance(): Application {
		if (!Application._instance) {
			Application._instance = new Application()
		}
		return Application._instance
	}

	bootstrap(): void {
		Localize.setLocale()
		AppRegistry.registerComponent(appName, StackNavigator)
	}
}
