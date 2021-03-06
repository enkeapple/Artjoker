import React, { Component } from 'react'
import { View, Text, ViewStyle, StyleSheet, StyleProp, TextStyle } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { LightBox } from 'models'
import { Localize } from 'services'

interface IProps {
	id: number
	first_name: string
	last_name: string
	gender: string
	dob: string
	status: string
}

export default class User extends Component<IProps> {
	handlePress = () => {
		const { id } = this.props
		LightBox.getID(id)
	}

	render() {
		const { id, first_name, last_name, gender, dob, status } = this.props
		const disabled = status === 'inactive'
		return (
			<Ripple style={button} {...{ disabled }} onPress={this.handlePress}>
				<View style={layout}>
					<Text style={[key, name, disabled && inactive]}>#{id}</Text>
					<Text style={[label, name, disabled && inactive]}>
						{first_name} {last_name}
					</Text>
					<Text style={[label, name, disabled && inactive]}>{Localize.translate('userAge', { dob })}</Text>
					<Text style={[label, name, disabled && inactive]}>{gender}</Text>
				</View>
			</Ripple>
		)
	}
}

const button: ViewStyle = {
	height: 50,
	borderWidth: StyleSheet.hairlineWidth,
	borderColor: '#d3d3d3',
}

const layout: ViewStyle = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'space-between',
	flexDirection: 'row',
	paddingHorizontal: 15,
	height: 50,
}

const key: StyleProp<ViewStyle | TextStyle> = {
	width: 30,
}

const label: StyleProp<ViewStyle | TextStyle> = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
}

const name: TextStyle = {
	color: '#000',
	fontSize: 14,
}

const inactive: TextStyle = {
	color: '#d3d3d3',
}
