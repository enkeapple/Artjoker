import React, { Component } from 'react'
import { View, ViewStyle, Text, StyleSheet, Dimensions } from 'react-native'
import { Localize } from 'services'
import Ripple from 'react-native-material-ripple'
import { list } from 'constants/data'
import { TextField } from 'react-native-material-textfield'
import { Dropdown } from 'react-native-material-dropdown'
import { observer } from 'mobx-react'
import { observable, action, toJS } from 'mobx'

const { width } = Dimensions.get('window')
const keyboardType = 'number-pad'
const maxLength = 2

@observer
export default class Filter extends Component {
	@observable name: string = ''
	@observable fromAge: string = ''
	@observable toAge: string = ''
	@observable gender: string = ''

	@action handleChangeName = (name: string) => {
		this.name = name
	}

	@action handleChangeFromAge = (fromAge: string) => {
		this.fromAge = fromAge
	}

	@action handleChangeToAge = (toAge: string) => {
		this.toAge = toAge
	}

	@action handleChangeGender = (gender: string) => {
		this.gender = gender
	}

	@action handleReset = () => {
		this.name = ''
		this.fromAge = ''
		this.toAge = ''
		this.gender = ''
	}

	render() {
		return (
			<View style={layout}>
				<TextField
					inputContainerStyle={field}
					label={Localize.translate('inputName')}
					value={toJS(this.name)}
					onChangeText={this.handleChangeName}
				/>
				<View style={block}>
					<TextField
						{...{ keyboardType, maxLength }}
						inputContainerStyle={[field, age]}
						label={Localize.translate('inputAgeFrom')}
						value={this.fromAge}
						onChangeText={this.handleChangeFromAge}
					/>
					<TextField
						{...{ keyboardType, maxLength }}
						inputContainerStyle={[field, age]}
						label={Localize.translate('inputAgeTo')}
						value={this.toAge}
						onChangeText={this.handleChangeToAge}
					/>
				</View>
				<Dropdown
					inputContainerStyle={field}
					label={Localize.translate('inputGenger')}
					value={this.gender}
					data={list}
					onChangeText={this.handleChangeGender}
				/>
				<Ripple style={button} onPress={this.handleReset}>
					<Text>{Localize.translate('btnReset').toUpperCase()}</Text>
				</Ripple>
			</View>
		)
	}
}

const layout: ViewStyle = {
	height: 280,
	paddingHorizontal: 15,
	paddingBottom: 7.5,
	justifyContent: 'space-between',
}

const field: ViewStyle = {
	paddingHorizontal: 15,
}

const button: ViewStyle = {
	height: 50,
	alignItems: 'center',
	justifyContent: 'center',
	borderWidth: StyleSheet.hairlineWidth,
	borderRadius: 4,
}

const age: ViewStyle = {
	width: width / 2 - 25,
}

const block: ViewStyle = {
	flexDirection: 'row',
	justifyContent: 'space-between',
}
