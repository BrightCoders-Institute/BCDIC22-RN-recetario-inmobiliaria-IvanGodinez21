// Node modules
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// Classes
import Property from '../classes/Property';
// Interfaces
import { RootStackParamList } from './RootStackParamList';

export type IHomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export interface IHomeState {
	data?: { properties: Property[] };
}
