import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const StackNavigator = createStackNavigator(
	{
		MAIN: { screen: require('screens/Main').default },
	},
	{
		headerMode: 'screen',
		initialRouteName: 'MAIN',
		defaultNavigationOptions: {
			gestureEnabled: false,
			headerShown: false,
		},
	},
)

export default createAppContainer(StackNavigator)
