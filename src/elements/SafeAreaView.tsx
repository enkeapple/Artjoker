import React, { Component, ComponentType } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ViewStyle } from 'react-native'

export default (Screen: ComponentType) => {
	return class extends Component {
		render() {
			return (
				<SafeAreaView style={layout}>
					<Screen />
				</SafeAreaView>
			)
		}
	}
}

const layout: ViewStyle = {
	flex: 1,
}
