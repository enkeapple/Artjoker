import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ViewStyle } from 'react-native'
import { background } from 'themes/colors'

export default (Screen: React.ComponentType<{}>) => {
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
	backgroundColor: background,
}
