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

Application.instance.bootstrap()
