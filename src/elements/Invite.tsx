import React, { Fragment } from 'react'
import { View, Dimensions, Modal, ViewStyle, Text, StyleSheet } from 'react-native'
import { Localize } from 'services'
import Ripple from 'react-native-material-ripple'

const { width, height } = Dimensions.get('window')
const transparent = true

interface IProps {
	invite: number | null
	onSuccess: (index: number | null) => void
}

export default (props: IProps) => {
	const { invite, onSuccess } = props
	const visible = invite !== null

	const handleSuccess = () => {
		onSuccess(null)
	}

	return (
		<Fragment>
			<Modal {...{ visible, transparent }}>
				<View style={layout}>
					<View style={wrapper}>
						<Text>{Localize.translate('modalSuccess')}</Text>
						<Ripple style={button} onPress={handleSuccess}>
							<Text>{Localize.translate('btnOK').toUpperCase()}</Text>
						</Ripple>
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

const button: ViewStyle = {
	marginTop: 20,
	width: width - 100,
	height: 40,
	borderWidth: StyleSheet.hairlineWidth,
	borderColor: '#d3d3d3',
	borderRadius: 4,
	alignItems: 'center',
	justifyContent: 'center',
}
