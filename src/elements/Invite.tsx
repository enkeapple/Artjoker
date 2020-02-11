import React, { Fragment, Component } from 'react'
import { View, Dimensions, Modal, ViewStyle, Text, StyleSheet } from 'react-native'
import { LightBox } from 'models'
import { Localize } from 'services'
import Ripple from 'react-native-material-ripple'
import { observer } from 'mobx-react'

const { width, height } = Dimensions.get('window')

@observer
export default class Invite extends Component {
	render() {
		return (
			<Fragment>
				<Modal transparent visible={LightBox.invite}>
					<View style={layout}>
						<View style={wrapper}>
							<Text>{Localize.translate('modalSuccess')}</Text>
							<Ripple style={button} onPress={LightBox.handleInvite}>
								<Text>{Localize.translate('btnOK').toUpperCase()}</Text>
							</Ripple>
						</View>
					</View>
				</Modal>
			</Fragment>
		)
	}
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
