import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Wrapper } from 'elements'
import { Main } from 'screens'

const StackNavigator = createStackNavigator(
	{
		MAIN: { screen: Main },
	},
	{
		headerMode: 'screen',
		defaultNavigationOptions: {
			gestureEnabled: false,
			headerShown: false,
		},
	},
)

export default Wrapper(createAppContainer(StackNavigator))
