// Node modules
import React, { Component } from 'react';
import { ScrollView, View, ImageBackground, Text, Share } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
// Interfaces
import { IPropertyDetailsProps } from '../interfaces/PropertyDetails';

export default class PropertyDetails extends Component<IPropertyDetailsProps> {
	constructor(props: IPropertyDetailsProps) {
		super(props);
	}

	render() {
		return (
			<View style={{ marginTop: Constants.statusBarHeight }}>
				<ImageBackground
					source={{ uri: this.props.route.params.data.property.image }}
					style={{ width: '100%', height: 300 }}
				>
					<View style={{ flexDirection: 'column', flex: 3, margin: 20 }}>
						<View style={{ flexDirection: 'row', flex: 2 }}>
							<View style={{ flex: 0.1 }}>
								<MaterialIcons
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
								<MaterialIcons
									name='ios-share'
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
								<MaterialIcons
									name={this.props.route.params.data.property.favorite ? 'favorite' : 'favorite-border'}
									size={30}
									color='#FFFFFF'
									style={{ textAlign: 'center' }}
									onPress={() => {
										this.props.route.params.data.property.favorite = !this.props.route.params.data.property.favorite;
										this.setState({ favorite: this.props.route.params.data.property.favorite });
									}}
								/>
							</View>
						</View>
						<View>
							<Text style={{ fontSize: 20, color: '#FFFFFF' }}>{this.props.route.params.data.property.name}</Text>
						</View>
					</View>
				</ImageBackground>
				<ScrollView>
					<View>
						<Text
							style={{
								flexDirection: 'row',
								fontSize: 15,
								marginTop: 10,
								marginLeft: 10,
							}}
						>
							Details
						</Text>
						{/* <VerticalScrollMenu data={this.props.route.params.data.ingredients} /> */}
					</View>
				</ScrollView>
			</View>
		);
	}
}
