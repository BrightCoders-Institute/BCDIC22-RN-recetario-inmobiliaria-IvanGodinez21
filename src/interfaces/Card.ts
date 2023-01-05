// Node modules
import { ViewStyle } from 'react-native';
// Classes
import Property from '../classes/Property.js';

export interface ICardProps {
	item: Property;
	elementsSize: 'sm' | 'lg';
	style?: ViewStyle;
}
