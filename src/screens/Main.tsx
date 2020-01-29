import React, { Component } from 'react'
import { View, ViewStyle } from 'react-native'
import { Filter, List, SafeAreaView } from 'elements'
import { Users } from 'models'
import { observer } from 'mobx-react'
import { observable, toJS } from 'mobx'
import { ISection } from 'types/Http'

@observer
class Main extends Component {
	@observable private _sections: ISection[] = observable([])
	@observable private _model: Users = new Users()

	get model(): Users {
		return this._model
	}


	componentDidMount() {
		this.model.fetchUserList().then((response) => {
			this._sections = response
		})
	}

	handleDate = (index: number | null) => {
		this._sections.map((section: ISection) => {
			console.log(section.data.filter((element) => Number(element.id) !== Number(index)))
			section.data = section.data.filter((element) => Number(element.id) !== Number(index))
			return section
		})
		console.log(this._sections, index)
	}

	render() {
		return (
			<View style={layout}>
				<Filter />
				<List sections={toJS(this._sections)} onDate={this.handleDate} />
			</View>
		)
	}
}

export default SafeAreaView(Main)

const layout: ViewStyle = {
	flex: 1,
}
