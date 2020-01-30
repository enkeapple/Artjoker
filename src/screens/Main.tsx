import React, { Component } from 'react'
import { View, ViewStyle } from 'react-native'
import { Filter, List, SafeAreaView, Offer, Invite } from 'elements'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import { ISection } from 'types/Http'
import { Input } from 'models'

interface IProps {
	store: {
		data: ISection[]
		fetchUserList: () => Promise<ISection[]>
	}
}

@inject('store')
@observer
class Main extends Component<IProps> {
	componentDidMount() {
		this.props.store.fetchUserList()
	}

	render() {
		const { data } = this.props.store
		return (
			<View style={layout}>
				<Filter />
				<List sections={toJS(Input.list).length ? toJS(Input.list) : toJS(data)} />
				<Offer />
				<Invite />
			</View>
		)
	}
}

export default SafeAreaView(Main)

const layout: ViewStyle = {
	flex: 1,
}
