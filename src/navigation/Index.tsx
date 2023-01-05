// Node modules
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Classes
import Property from '../classes/Property.js';
//Constants
import { NavigationContainerTheme, HomeStackScreenTheme } from '../constants/themes';
// Databases
import properties from '../databases/properties.json';
// Interfaces
import { RootStackParamList } from '../interfaces/RootStackParamList';
// Screens
import Home from '../screens/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class Navigation extends Component {
	constructor(props: object) {
		super(props);
	}

	render() {
		return (
			<NavigationContainer theme={NavigationContainerTheme}>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen
						name='Home'
						component={Home}
						options={HomeStackScreenTheme}
						initialParams={{ data: { properties: properties as Property[] } }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
