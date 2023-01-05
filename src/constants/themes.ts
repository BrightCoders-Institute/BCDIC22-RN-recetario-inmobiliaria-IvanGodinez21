import { DefaultTheme } from '@react-navigation/native';

export const NavigationContainerTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		//primary: '#151525',
		//secondary: '#151525',
		text: '#151525',
		background: '#FFFFFF',
		//border: '#FFFFFF',
		//notification: '#FFFFFF',
	},
};

export const DefaultStackScreenTheme = { headerShown: false, headerStyle: { backgroundColor: '#FFFFFF' } };

export const HomeStackScreenTheme = { ...DefaultStackScreenTheme, headerShown: false };
