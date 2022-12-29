import { DefaultTheme } from '@react-navigation/native';

export const NavigationContainerTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		//primary: '#151525',
		//secondary: '#151525',
		text: '#151525',
		background: '#F5FDFF',
		//border: '#ffffff',
		//notification: '#ffffff',
	},
};

export const DefaultStackScreenTheme = { headerShown: false, headerStyle: { backgroundColor: '#282828' } };

export const HomeStackScreenTheme = { ...DefaultStackScreenTheme, headerShown: false };
