import React from 'react'
import { ViewStyle, SectionList, View } from 'react-native'
import { User, Title } from 'elements'
import { IUser } from 'types/Http'

interface IProps {
	users: ISection[]
}

interface ISection {
	title: string
	data: IUser[]
}

interface IData {
	item: IUser
	index: number
}

export default (props: IProps) => {
	const { users } = props

	const _keyExtractor = (_item: IUser, index: number) => index.toString()

	const _renderItem = ({ item, index }: IData) => {
		const { id, first_name, last_name, gender, dob, status } = item
		return <User key={index} {...{ id, first_name, last_name, gender, dob, status }} />
	}

	const _renderSectionHeader = ({ section }: any) => {
		const { index, title } = section
		return <Title key={index} {...{ title }} />
	}

	return (
		<View style={layout}>
			<SectionList
				sections={users}
				keyExtractor={_keyExtractor}
				renderItem={_renderItem}
				renderSectionHeader={_renderSectionHeader}
			/>
		</View>
	)
}

const layout: ViewStyle = {
	flex: 2,
}
