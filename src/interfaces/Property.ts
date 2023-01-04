export interface IPropertyConstructor {
	address: string;
	bathrooms: number;
	cost: number;
	favorite?: boolean;
	name: string;
	qualification?: number;
	rooms: number;
	surface: {
		lenght: number;
		width: number;
		heigth?: number;
		unit: 'ft';
	};
}
