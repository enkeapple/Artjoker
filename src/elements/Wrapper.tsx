import React, { Component } from 'react'
import { Platform, StatusBar, ComponentProvider } from 'react-native'
import { NavigationContainer } from 'react-navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'mobx-react'
import { Users } from 'models'

const backgroundColor = Platform.OS === 'ios' ? 'transparent' : '#000'
const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content'

export default (StackNavigator: NavigationContainer): ComponentProvider => {
	return () => {
		return class extends Component {
			render() {
				return (
					<Provider store={Users}>
						<SafeAreaProvider>
							<StatusBar {...{ backgroundColor, barStyle }} />
							<StackNavigator />
						</SafeAreaProvider>
					</Provider>
				)
			}
		}
	}
}
