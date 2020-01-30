import { observable, action, autorun } from 'mobx'
import Users from './Users'
import { ISection } from 'types/Http'
import { cloneDeep, debounce, includes } from 'lodash'

class Input {
	@observable private _users: typeof Users = Users
	@observable data: ISection[] = Users.data
	@observable list: ISection[] = observable([])

	@observable name: string = ''
	@observable fromAge: string = ''
	@observable toAge: string = ''
	@observable gender: string = ''

	@observable handle: any

	constructor() {
		this.handle = debounce(this.handleFilter, 100)
		autorun((): any => {
			if (this.name || this.fromAge || this.toAge || this.gender) {
				this.handle()
			}
		})
	}

	get users(): typeof Users {
		return this._users
	}

	@action handleChangeName = (name: string): void => {
		this.name = name
	}

	@action handleChangeFromAge = (fromAge: string): void => {
		this.fromAge = fromAge
	}

	@action handleChangeToAge = (toAge: string): void => {
		this.toAge = toAge
	}

	@action handleChangeGender = (gender: string): void => {
		this.gender = gender
	}

	@action.bound handleReset = (): void => {
		this.name = ''
		this.fromAge = ''
		this.toAge = ''
		this.gender = ''
		this.list = []
	}

	@action handleFilter = (): void => {
		this.list = cloneDeep(this.users.data)
		const from = this.fromAge ? this.fromAge : Users.fromAge
		const to = this.toAge ? this.toAge : Users.toAge
		this.list.map((section: ISection) => {
			section.data = section.data
				.filter((element) => {
					if (this.gender && this.gender !== 'Both') {
						return element.gender.toLowerCase() === this.gender.toLowerCase()
					}
					return element
				})
				.filter((element) => {
					if (this.name) {
						const title = `${element.first_name} ${element.last_name}`
						return this.name.length > 2 ? includes(title.toLowerCase(), this.name.toLowerCase()) : element
					}
					return element
				})
				.filter((element) => {
					if (this.fromAge || this.toAge) {
						return Number(from) <= Number(element.dob) && Number(element.dob) <= Number(to)
					}
					return element
				})
		})
	}
}

export default new Input()
