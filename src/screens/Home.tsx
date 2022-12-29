// Node modules
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class Home extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Open up Home.tsx to start working on your app!</Text>
				<StatusBar style='auto' />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
