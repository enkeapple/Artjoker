import React, { Component } from 'react'
import { View } from 'react-native'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { layout } from 'themes/styles'
import { NavigationScreenProp, NavigationParams } from 'react-navigation'
import Application from '../Application'
import { IUser } from 'types/Http'

@observer
class Main extends Component<NavigationScreenProp<NavigationParams>> {
	@observable users?: IUser[]

	async componentDidMount() {
		this.users = await Application.instance.fetchData()
	}

	render() {
		return <View style={layout}></View>
	}
}

export default Main
