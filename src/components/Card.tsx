// Node modules
import React, { Component } from 'react';
import { Text, ImageBackground, View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
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
						backgroundColor: '#e0f9ff',
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
						<MaterialIcons
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
						<MaterialIcons
							name='location-on'
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
							<MaterialIcons
								name='king-bed'
								size={24}
								color='#424242'
								style={{ textAlign: 'center', textAlignVertical: 'center' }}
							/>
							<Text style={{ fontWeight: '600', fontSize: 13, textAlignVertical: 'center', marginStart: 5 }}>
								{this.props.item.rooms}
							</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<MaterialIcons
								name='bathtub'
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
								name='ruler'
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
						<Text
							style={{ fontWeight: 'bold', fontSize: 16, textAlignVertical: 'center' }}
						>{`$${this.props.item.cost}/m`}</Text>
						<MaterialIcons
							name='favorite'
							size={14}
							color={this.props.item.favorite ? '#FF6DA2' : '#FFFFFF'}
							style={{
								padding: 6,
								textAlign: 'center',
								textAlignVertical: 'center',
								backgroundColor: '#00B074',
								borderRadius: 100,
							}}
						/>
					</View>
				</View>
			</View>
		);
	}
}
