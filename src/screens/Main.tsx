import React, { Component } from 'react'
import { View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'elements'

class Main extends Component {
	render() {
		return <View style={layout}></View>
	}
}

export default SafeAreaView(Main)

const layout: ViewStyle = {
	flex: 1,
}
