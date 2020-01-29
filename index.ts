import { YellowBox } from 'react-native'
import Application from './src/Application'

YellowBox.ignoreWarnings([
	'Module RNEmulatorCheck requires main queue setup',
	'Remote debugger',
	'RCTBridge required dispatch_sync to load',
	'Async Storage',
	'Require cycle:',
	'Remote debugger',
	'Warning:',
])

// tslint:disable-next-line: no-console
console.disableYellowBox = true
// tslint:disable-next-line: no-console
console.ignoredYellowBox = ['Warning: ReactNative.createElement']

Application.instance.bootstrap()
