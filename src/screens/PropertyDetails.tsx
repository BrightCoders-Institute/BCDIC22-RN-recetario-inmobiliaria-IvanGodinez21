// Node modules
import React, { Component } from 'react';
import { ScrollView, View, ImageBackground, Text, Share } from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DataTable } from 'react-native-paper';
// Interfaces
import { IPropertyDetailsProps } from '../interfaces/PropertyDetails';

export default class PropertyDetails extends Component<IPropertyDetailsProps> {
	constructor(props: IPropertyDetailsProps) {
		super(props);
	}

	render() {
		return (
			<View
				testID='PropertyDetailsScreen'
				style={{ marginTop: Constants.statusBarHeight, flexDirection: 'column', flex: 1 }}
			>
				<ImageBackground
					source={{ uri: this.props.route.params.data.property.image }}
					style={{ width: 'auto', height: 'auto', flex: 1 }}
				>
					<View style={{ flexDirection: 'column', flex: 3, margin: 20 }}>
						<View style={{ flexDirection: 'row', flex: 2 }}>
							<View style={{ flex: 0.1 }}>
								<MaterialCommunityIcons
									name='close'
									size={30}
									color='#FFFFFF'
									style={{ textAlign: 'center' }}
									onPress={() => {
										this.props.navigation.navigate('Home');
									}}
								/>
							</View>
							<View style={{ flex: 0.7 }}></View>
							<View style={{ flex: 0.1 }}>
								<MaterialCommunityIcons
									name='share-variant'
									size={30}
									color='#FFFFFF'
									style={{ textAlign: 'center' }}
									onPress={async () => {
										await Share.share({
											message: `Property: ${this.props.route.params.data.property.name}\nAddress: ${this.props.route.params.data.property.address}`,
										});
									}}
								/>
							</View>
							<View style={{ flex: 0.1 }}>
								<MaterialCommunityIcons
									name={this.props.route.params.data.property.favorite ? 'heart' : 'heart-outline'}
									size={30}
									color={this.props.route.params.data.property.favorite ? '#FF6DA2' : '#FFFFFF'}
									style={{ textAlign: 'center' }}
									onPress={() => {
										this.props.route.params.data.property.favorite = !this.props.route.params.data.property.favorite;
										this.setState({ favorite: this.props.route.params.data.property.favorite });
									}}
								/>
							</View>
						</View>
						<View>
							<Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>
								{this.props.route.params.data.property.name}
							</Text>
						</View>
					</View>
				</ImageBackground>
				<DataTable style={{ flex: 2 }}>
					<DataTable.Header>
						<DataTable.Title style={{ justifyContent: 'center' }}>Details</DataTable.Title>
					</DataTable.Header>
					<ScrollView>
						<DataTable.Row>
							<DataTable.Cell>
								<View style={{ flexDirection: 'row' }}>
									<MaterialCommunityIcons
										name='map-marker-outline'
										size={24}
										color='#424242'
										style={{ textAlign: 'center', textAlignVertical: 'center' }}
									/>
									<Text style={{ marginStart: 5, textAlign: 'center', textAlignVertical: 'center' }}>Address</Text>
								</View>
							</DataTable.Cell>
							<DataTable.Cell style={{ justifyContent: 'flex-end' }}>
								<Text style={{ marginStart: 5, textAlign: 'center', textAlignVertical: 'center' }}>
									{this.props.route.params.data.property.address}
								</Text>
							</DataTable.Cell>
						</DataTable.Row>
						<DataTable.Row>
							<DataTable.Cell>
								<View style={{ flexDirection: 'row' }}>
									<MaterialCommunityIcons
										name='bed-king-outline'
										size={24}
										color='#424242'
										style={{ textAlign: 'center', textAlignVertical: 'center' }}
									/>
									<Text style={{ marginStart: 5, textAlign: 'center', textAlignVertical: 'center' }}>Rooms</Text>
								</View>
							</DataTable.Cell>
							<DataTable.Cell style={{ justifyContent: 'flex-end' }}>
								<Text style={{ marginStart: 5, textAlign: 'center', textAlignVertical: 'center' }}>
									{this.props.route.params.data.property.rooms}
								</Text>
							</DataTable.Cell>
						</DataTable.Row>
						<DataTable.Row>
							<DataTable.Cell>
								<View style={{ flexDirection: 'row' }}>
									<MaterialCommunityIcons
										name='bathtub-outline'
										size={24}
										color='#424242'
										style={{ textAlign: 'center', textAlignVertical: 'center' }}
									/>
									<Text style={{ marginStart: 5, textAlign: 'center', textAlignVertical: 'center' }}>Bathrooms</Text>
								</View>
							</DataTable.Cell>
							<DataTable.Cell style={{ justifyContent: 'flex-end' }}>
								<Text style={{ marginStart: 5, textAlign: 'center', textAlignVertical: 'center' }}>
									{this.props.route.params.data.property.bathrooms}
								</Text>
							</DataTable.Cell>
						</DataTable.Row>
						<DataTable.Row>
							<DataTable.Cell>
								<View style={{ flexDirection: 'row' }}>
									<MaterialCommunityIcons
										name='arrow-expand-all'
										size={24}
										color='#424242'
										style={{ textAlign: 'center', textAlignVertical: 'center' }}
									/>
									<Text style={{ marginStart: 5, textAlign: 'center', textAlignVertical: 'center' }}>Area</Text>
								</View>
							</DataTable.Cell>
							<DataTable.Cell style={{ justifyContent: 'flex-end' }}>
								<Text style={{ marginStart: 5, textAlign: 'center', textAlignVertical: 'center' }}>
									{this.props.route.params.data.property.surface.lenght *
										this.props.route.params.data.property.surface.width}{' '}
									{this.props.route.params.data.property.surface.unit} ²
								</Text>
							</DataTable.Cell>
						</DataTable.Row>
						<DataTable.Row>
							<DataTable.Cell>
								<View style={{ flexDirection: 'row' }}>
									<MaterialCommunityIcons
										name='currency-usd'
										size={24}
										color='#424242'
										style={{ textAlign: 'center', textAlignVertical: 'center' }}
									/>
									<Text style={{ marginStart: 5, textAlign: 'center', textAlignVertical: 'center' }}>Cost</Text>
								</View>
							</DataTable.Cell>
							<DataTable.Cell style={{ justifyContent: 'flex-end' }}>
								<Text style={{ marginStart: 5, textAlign: 'center', textAlignVertical: 'center' }}>
									${this.props.route.params.data.property.cost} / month
								</Text>
							</DataTable.Cell>
						</DataTable.Row>
					</ScrollView>
				</DataTable>
			</View>
		);
	}
}
