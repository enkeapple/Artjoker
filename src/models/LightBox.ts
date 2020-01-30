import { Users } from 'models'
import { observable, action } from 'mobx'
import { ISection } from 'types/Http'

class LightBox {
	@observable offer: boolean = false
	@observable invite: boolean = false
	@observable id: number | null = null

	@action getID = (id: number | null) => {
		this.id = id
		this.handleOffer()
	}

	@action handleOffer = () => {
		this.offer = !this.offer
	}

	@action handleInvite = () => {
		this.offer = false
		this.invite = !this.invite
		this.handleSuccess()
	}

	@action handleSuccess = () => {
		Users.data.map((section: ISection) => {
			section.data = section.data.filter((element) => Number(element.id) !== Number(this.id))
		})
	}
}

export default new LightBox()
