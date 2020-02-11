import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Wrapper } from './elements'
import { Component } from 'react'

type IStack = {
	Home: undefined
}

const Stack = createNativeStackNavigator<IStack>()

const initialRouteName = 'Home'

const screenOptions: NativeStackNavigationOptions = {
	headerShown: false,
	gestureEnabled: false,
	stackAnimation: 'fade',
}

class Navigator extends Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator {...{ initialRouteName, screenOptions }}>
					<Stack.Screen name={'Home'} component={require('./screens/Home').default} />
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}

export default Wrapper(Navigator)
