// Node modules
import React, { Component } from 'react';
import { Text, ImageBackground, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Interfaces
import { ICardProps } from '../interfaces/Card';

export default class Card extends Component<ICardProps> {
	constructor(props: ICardProps) {
		super(props);
	}

	render() {
		return (
			<View
				style={[
					this.props.style,
					{
						backgroundColor: '#E7F4F7',
						borderRadius: 10,
						padding: 16,
						justifyContent: 'flex-start',
						flexDirection: 'row',
					},
				]}
			>
				<ImageBackground
					source={{ uri: this.props.item.image }}
					style={{ width: 110, height: 110, justifyContent: 'flex-end', alignItems: 'center' }}
					imageStyle={{ borderRadius: 15 }}
				>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							margin: 4,
							padding: 4,
							paddingHorizontal: 6,
							backgroundColor: '#FBEDB7',
							borderRadius: 10,
						}}
					>
						<MaterialCommunityIcons
							name='star'
							size={14}
							color='#EEBA00'
							style={{ textAlign: 'center', textAlignVertical: 'center' }}
						/>
						<Text style={{ color: '#7A6229', fontSize: 12, fontWeight: 'bold', textAlignVertical: 'center' }}>
							{this.props.item.qualification}
						</Text>
					</View>
				</ImageBackground>
				<View style={{ marginStart: 15, justifyContent: 'space-between' }}>
					<Text style={{ fontWeight: '500', fontSize: 18 }}>{this.props.item.name}</Text>
					<View style={{ flexDirection: 'row' }}>
						<MaterialCommunityIcons
							name='map-marker-outline'
							size={24}
							color='#424242'
							style={{ textAlign: 'center', textAlignVertical: 'center' }}
						/>
						<Text style={{ fontWeight: '300', fontSize: 13, textAlignVertical: 'center', marginStart: 5 }}>
							{this.props.item.address}
						</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<View style={{ flexDirection: 'row' }}>
							<MaterialCommunityIcons
								name='bed-king-outline'
								size={24}
								color='#424242'
								style={{ textAlign: 'center', textAlignVertical: 'center' }}
							/>
							<Text style={{ fontWeight: '600', fontSize: 13, textAlignVertical: 'center', marginStart: 5 }}>
								{this.props.item.rooms}
							</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<MaterialCommunityIcons
								name='bathtub-outline'
								size={24}
								color='#424242'
								style={{ textAlign: 'center', textAlignVertical: 'center' }}
							/>
							<Text style={{ fontWeight: '600', fontSize: 13, textAlignVertical: 'center', marginStart: 5 }}>
								{this.props.item.bathrooms}
							</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<MaterialCommunityIcons
								name='arrow-expand-all'
								size={24}
								color='#424242'
								style={{ textAlign: 'center', textAlignVertical: 'center' }}
							/>
							<Text style={{ fontWeight: '600', fontSize: 13, textAlignVertical: 'center', marginStart: 5 }}>{`${
								this.props.item.surface.lenght * this.props.item.surface.width
							} ${this.props.item.surface.unit} ²`}</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<View style={{ flexDirection: 'row' }}>
							<MaterialCommunityIcons
								name='currency-usd'
								size={24}
								color='#424242'
								style={{ textAlign: 'center', textAlignVertical: 'center' }}
							/>
							<Text
								style={{ fontWeight: 'bold', fontSize: 16, textAlignVertical: 'center' }}
							>{`${this.props.item.cost}/m`}</Text>
						</View>
						<MaterialCommunityIcons
							name='heart'
							testID='favoriteButton'
							size={14}
							color='#FFFFFF'
							style={{
								padding: 6,
								textAlign: 'center',
								textAlignVertical: 'center',
								backgroundColor: `${this.props.item.favorite ? '#FF6DA2' : '#00B074'}`,
								borderRadius: 100,
							}}
							onPress={() => {
								this.props.item.favorite = !this.props.item.favorite;
								this.setState({ favorite: this.props.item.favorite });
							}}
						/>
					</View>
				</View>
			</View>
		);
	}
}
