import React, { Fragment, Component } from 'react'
import { View, Dimensions, Modal, ViewStyle, Text, StyleSheet } from 'react-native'
import { Localize, LightBox } from 'models'
import Ripple from 'react-native-material-ripple'
import { observer } from 'mobx-react'

const { width, height } = Dimensions.get('window')

@observer
export default class Offer extends Component {
	render() {
		return (
			<Fragment>
				<Modal transparent visible={LightBox.offer}>
					<View style={layout}>
						<View style={wrapper}>
							<Text>{Localize.translate('modalQuestion', { question: LightBox.id })}</Text>
							<View style={block}>
								<Ripple style={button} onPress={LightBox.handleInvite}>
									<Text>{Localize.translate('btnYes').toUpperCase()}</Text>
								</Ripple>
								<Ripple style={button} onPress={LightBox.handleOffer}>
									<Text>{Localize.translate('btnNo').toUpperCase()}</Text>
								</Ripple>
							</View>
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
