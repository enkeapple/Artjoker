import React, { Component } from 'react'
import { View, ViewStyle, Text, StyleSheet, Dimensions } from 'react-native'
import { Localize, Input } from 'models'
import Ripple from 'react-native-material-ripple'
import { list } from 'constants/data'
import { TextField } from 'react-native-material-textfield'
import { Dropdown } from 'react-native-material-dropdown'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

const { width } = Dimensions.get('window')
const keyboardType = 'number-pad'
const maxLength = 2

@observer
export default class Filter extends Component {
	handleReset = (): void => {
		this.refs.name.inputRef.current.clear()
		this.refs.fromAge.inputRef.current.clear()
		this.refs.toAge.inputRef.current.clear()
		this.refs.gender.props.value = ''
		Input.handleReset()
	}

	render() {
		return (
			<View style={layout}>
				<TextField
					ref={'name'}
					inputContainerStyle={field}
					label={Localize.translate('inputName')}
					value={Input.name}
					onChangeText={Input.handleChangeName}
				/>
				<View style={block}>
					<TextField
						ref={'fromAge'}
						{...{ keyboardType, maxLength }}
						inputContainerStyle={[field, age]}
						label={Localize.translate('inputAgeFrom')}
						value={Input.fromAge}
						onChangeText={Input.handleChangeFromAge}
					/>
					<TextField
						ref={'toAge'}
						{...{ keyboardType, maxLength }}
						inputContainerStyle={[field, age]}
						label={Localize.translate('inputAgeTo')}
						value={Input.toAge}
						onChangeText={Input.handleChangeToAge}
					/>
				</View>
				<Dropdown
					ref={'gender'}
					inputContainerStyle={field}
					label={Localize.translate('inputGenger')}
					value={Input.gender}
					data={list}
					onChangeText={Input.handleChangeGender}
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
