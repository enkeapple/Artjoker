import React, { Component } from 'react'
import { NavigationContainer } from 'react-navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default (Navigator: NavigationContainer) => {
	return class extends Component {
		render() {
			return (
				<SafeAreaProvider>
					<Navigator />
				</SafeAreaProvider>
			)
		}
	}
}
