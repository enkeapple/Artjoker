import React, { Component } from 'react'
import { Platform, StatusBar } from 'react-native'
import { NavigationContainer } from 'react-navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const backgroundColor = Platform.OS === 'ios' ? 'transparent' : '#15253B'
const barStyle = 'light-content'

export default (Navigator: NavigationContainer) => {
	return class extends Component {
		render() {
			return (
				<SafeAreaProvider>
					<StatusBar {...{ backgroundColor, barStyle }} />
					<Navigator />
				</SafeAreaProvider>
			)
		}
	}
}
