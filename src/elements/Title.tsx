import React from 'react'
import { View, Text, ViewStyle, TextStyle } from 'react-native'

interface IProps {
	title: string
}

export default (props: IProps) => {
	const { title } = props
	return (
		<View style={layout}>
			<Text style={name}>{`<${title}>`}</Text>
		</View>
	)
}

const layout: ViewStyle = {
	paddingHorizontal: 15,
	height: 30,
	justifyContent: 'center',
	backgroundColor: '#d3d3d3',
}

const name: TextStyle = {
	color: '#000',
	fontSize: 16,
	fontWeight: 'bold',
}
