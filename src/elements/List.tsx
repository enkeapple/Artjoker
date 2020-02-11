import React, { Component } from 'react'
import { ViewStyle, SectionList, View, ActivityIndicator, Dimensions } from 'react-native'
import { User, Title } from 'elements'
import { IUser, IData, ISection } from 'types/Http'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

const { width } = Dimensions.get('window')

interface IProps {
	sections: ISection[]
}

@observer
export default class List extends Component<IProps> {
	@observable visible: boolean = false
	@observable question: number | null = null
	@observable invite: number | null = null

	keyExtractor = (_item: IUser, index: number) => index.toString()

	renderItem = ({ item, index }: IData) => {
		const { id, first_name, last_name, gender, dob, status } = item
		return <User key={index} {...{ id, first_name, last_name, gender, dob, status }} />
	}

	renderSectionHeader = ({ section }: any) => {
		const { title, data } = section
		return data.length ? <Title {...{ title }} /> : null
	}

	render() {
		const { sections } = this.props

		if (!sections.length) {
			return (
				<View style={layout}>
					<ActivityIndicator size={'large'} />
				</View>
			)
		}

		return (
			<View style={layout}>
				<SectionList
					style={list}
					sections={sections}
					initialNumToRender={10}
					keyExtractor={this.keyExtractor}
					renderItem={this.renderItem}
					renderSectionHeader={this.renderSectionHeader}
				/>
			</View>
		)
	}
}

const layout: ViewStyle = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
}

const list: ViewStyle = {
	width,
}
