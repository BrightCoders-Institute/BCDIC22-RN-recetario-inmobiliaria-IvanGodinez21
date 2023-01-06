// Node modules
import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
// Classes
import Property from '../classes/Property';
// Components
import Card from '../components/Card';
// Interfaces
import { IHomeProps, IHomeState } from '../interfaces/Home';

export default class Home extends Component<IHomeProps, IHomeState> {
	constructor(props: IHomeProps) {
		super(props);
		this.state = {
			data: this.props.route.params?.data,
		};
	}

	render() {
		return (
			<ScrollView
				style={{ marginTop: Constants.statusBarHeight }}
				contentContainerStyle={{ alignItems: 'center', alignSelf: 'center' }}
			>
				{this.state.data?.properties
					//?.sort((a: Property, b: Property) => (a.name > b.name ? 1 : -1))
					.map((item: Property, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => {
								this.props.navigation.navigate('PropertyDetails', { data: { property: item } });
							}}
						>
							<Card style={styles.card} item={item} />
						</TouchableOpacity>
					))}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	title: {
		fontSize: 20,
		color: '#d91b73',
		textTransform: 'uppercase',
		marginBottom: 18,
	},
	card: {
		margin: 10,
	},
});
