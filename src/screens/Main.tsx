import React, { Component } from 'react'
import { View, ViewStyle } from 'react-native'
import { observer } from 'mobx-react'
import { Filter, List, SafeAreaView } from 'elements'
import Application from '../Application'
import { observable, toJS } from 'mobx'

@observer
class Main extends Component {
	@observable users = []

	componentDidMount() {
		Application.instance.fetchData().then((response) => (this.users = response))
	}

	render() {
		return (
			<View style={layout}>
				<Filter />
				<List users={toJS(this.users)} />
			</View>
		)
	}
}

export default SafeAreaView(Main)

const layout: ViewStyle = {
	flex: 1,
}
