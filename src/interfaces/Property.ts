export interface IPropertyConstructor {
	address: string;
	bathrooms: number;
	cost: number;
	favorite?: boolean | null;
	image: string;
	name: string;
	qualification?: number;
	rooms: number;
	surface: {
		heigth?: number | null;
		lenght: number;
		unit: 'ft';
		width: number;
	};
}
