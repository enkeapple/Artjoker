import React, { Component } from 'react'
import { ViewStyle, SectionList, View } from 'react-native'
import { User, Title, Question, Invite } from 'elements'
import { IUser, IData, ISection } from 'types/Http'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

interface IProps {
	sections: ISection[]
	onDate: (index: number) => void
}

@observer
export default class List extends Component<IProps> {
	@observable visible: boolean = false
	@observable question: number | null = null
	@observable invite: number | null = null

	keyExtractor = (_item: IUser, index: number) => index.toString()

	renderItem = ({ item, index }: IData) => {
		const { id, first_name, last_name, gender, dob, status } = item
		return (
			<User key={index} {...{ id, first_name, last_name, gender, dob, status }} onPress={this.handleQuestion} />
		)
	}

	renderSectionHeader = ({ section }: any) => {
		const { title, data } = section
		return data.length ? <Title {...{ title }} /> : null
	}

	handleModal = () => {
		this.visible = !this.visible
	}

	handleQuestion = (index: number | null) => {
		this.question = index
	}

	handleInvite = (index: number | null) => {
		this.invite = index
	}

	render() {
		const { sections, onDate } = this.props
		return (
			<View style={layout}>
				<SectionList
					sections={sections}
					initialNumToRender={10}
					keyExtractor={this.keyExtractor}
					renderItem={this.renderItem}
					renderSectionHeader={this.renderSectionHeader}
				/>
				<Question
					question={this.question}
					onQuestion={this.handleQuestion}
					onInvite={this.handleInvite}
					onDate={onDate}
				/>
				<Invite invite={this.invite} onSuccess={this.handleInvite} />
			</View>
		)
	}
}

const layout: ViewStyle = {
	flex: 1,
}
