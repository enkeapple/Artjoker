import React, { Fragment } from 'react'
import { View, Dimensions, Modal, ViewStyle, Text, StyleSheet } from 'react-native'
import { Localize } from 'services'
import Ripple from 'react-native-material-ripple'

const { width, height } = Dimensions.get('window')
const transparent = true

interface IProps {
	question: number | null
	onQuestion: (index: number | null) => void
	onInvite: (index: number | null) => void
	onDate: (index: number | null) => void
}

export default (props: IProps) => {
	const { question, onQuestion, onInvite, onDate } = props
	const visible = question !== null

	const handleYes = () => {
		onQuestion(null)
		onInvite(question)
		onDate(question)
	}

	const handleNo = () => {
		onQuestion(null)
	}

	return (
		<Fragment>
			<Modal {...{ visible, transparent }}>
				<View style={layout}>
					<View style={wrapper}>
						<Text>{Localize.translate('modalQuestion', { question })}</Text>
						<View style={block}>
							<Ripple style={button} onPress={handleYes}>
								<Text>{Localize.translate('btnYes').toUpperCase()}</Text>
							</Ripple>
							<Ripple style={button} onPress={handleNo}>
								<Text>{Localize.translate('btnNo').toUpperCase()}</Text>
							</Ripple>
						</View>
					</View>
				</View>
			</Modal>
		</Fragment>
	)
}

const layout: ViewStyle = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'rgba(34, 34, 34, .6)',
}

const wrapper: ViewStyle = {
	width: width - 40,
	height: height / 5,
	padding: 10,
	borderRadius: 4,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
}

const block: ViewStyle = {
	flexDirection: 'row',
	marginTop: 20,
}

const button: ViewStyle = {
	width: (width - 100) / 2,
	height: 40,
	borderWidth: StyleSheet.hairlineWidth,
	borderColor: '#d3d3d3',
	borderRadius: 4,
	alignItems: 'center',
	justifyContent: 'center',
}
