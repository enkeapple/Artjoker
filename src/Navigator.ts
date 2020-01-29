import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Wrapper } from './elements'

const StackNavigator = createStackNavigator(
	{
		MAIN: { screen: require('screens/Main').default },
	},
	{
		mode: 'modal',
		initialRouteName: 'MAIN',
		defaultNavigationOptions: {
			gestureEnabled: false,
			headerShown: false,
			cardStyle: {
				backgroundColor: 'transparent',
				opacity: 1,
			},
		},
	},
)

export default Wrapper(createAppContainer(StackNavigator))
