import React, { Component } from 'react'
import { Platform, StatusBar, ComponentProvider } from 'react-native'
import { NavigationContainer } from 'react-navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const backgroundColor = Platform.OS === 'ios' ? 'transparent' : '#fff'
const barStyle = 'dark-content'

export default (StackNavigator: NavigationContainer): ComponentProvider => {
	return () => {
		return class extends Component {
			render() {
				return (
					<SafeAreaProvider>
						<StatusBar {...{ backgroundColor, barStyle }} />
						<StackNavigator {...this.props} />
					</SafeAreaProvider>
				)
			}
		}
	}
}
