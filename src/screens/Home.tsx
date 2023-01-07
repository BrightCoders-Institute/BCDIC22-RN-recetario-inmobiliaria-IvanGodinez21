// Node modules
import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
// Components
import Card from '../components/Card';
// Interfaces
import { IHomeProps } from '../interfaces/Home';

export default class Home extends Component<IHomeProps> {
	constructor(props: IHomeProps) {
		super(props);
	}

	render() {
		return (
			<ScrollView
				testID='home'
				style={{ marginTop: Constants.statusBarHeight }}
				contentContainerStyle={{ alignItems: 'center', alignSelf: 'center' }}
			>
				<FlatList
					data={this.props.route.params?.data.properties}
					renderItem={({ item, index }) => (
						<TouchableOpacity
							testID={`cardTouchable-${index}`}
							key={index}
							onPress={() => {
								this.props.navigation.navigate('PropertyDetails', { data: { property: item } });
							}}
						>
							<Card style={styles.card} item={item} />
						</TouchableOpacity>
					)}
				/>
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
