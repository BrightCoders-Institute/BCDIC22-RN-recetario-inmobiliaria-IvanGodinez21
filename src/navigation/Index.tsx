// Node modules
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Constants
import { NavigationContainerTheme, HomeStackScreenTheme, DefaultStackScreenTheme } from '../constants/themes';
// Screens
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
	constructor(props: object) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<NavigationContainer theme={NavigationContainerTheme}>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name='Home' component={Home} options={HomeStackScreenTheme} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
