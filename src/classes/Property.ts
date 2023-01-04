import { IPropertyConstructor } from '../interfaces/Property';

export default class Property {
	public address: string;
	public bathrooms: number;
	public cost: number;
	public favorite?: boolean;
	public name: string;
	public qualification?: number;
	public rooms: number;
	public surface: {
		lenght: number;
		width: number;
		heigth?: number;
		unit: 'ft';
	};

	constructor({ name, address, rooms, bathrooms, surface, cost, qualification, favorite }: IPropertyConstructor) {
		this.address = address;
		this.bathrooms = bathrooms;
		this.cost = cost;
		this.favorite = favorite;
		this.name = name;
		this.qualification = qualification;
		this.rooms = rooms;
		this.surface = surface;
	}

	get surface2D() {
		return this.surface.lenght * this.surface.width;
	}
	get surface3D() {
		if (this.surface.heigth) return this.surface2D * this.surface.heigth;
	}
}
