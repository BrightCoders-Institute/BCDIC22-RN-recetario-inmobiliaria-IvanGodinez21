// Node modules
import { ParamListBase } from '@react-navigation/native';
// Classes
import Property from '../classes/Property';

export interface RootStackParamList extends ParamListBase {
	Home: { data: { properties: Property[] } };
}
