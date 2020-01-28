import React, { Component } from 'react'
import { Platform, StatusBar, ComponentProvider } from 'react-native'
import { NavigationContainer, NavigationContainerComponent } from 'react-navigation'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { IApplication } from 'types/Applications'
import { layout } from 'themes/styles'

const backgroundColor = Platform.OS === 'ios' ? 'transparent' : '#15253B'
const barStyle = 'light-content'

export default (Application: IApplication, StackNavigator: NavigationContainer): ComponentProvider => {
	return () => {
		return class extends Component {
			private setNavigatorRef = (navigator: NavigationContainerComponent) => {
				Application.setNavigator(navigator)
			}

			render() {
				return (
					<SafeAreaProvider>
						<StatusBar {...{ backgroundColor, barStyle }} />
						<SafeAreaView style={layout}>
							<StackNavigator ref={this.setNavigatorRef} />
						</SafeAreaView>
					</SafeAreaProvider>
				)
			}
		}
	}
}


