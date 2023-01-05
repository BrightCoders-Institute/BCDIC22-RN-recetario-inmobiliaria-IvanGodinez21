import { IPropertyConstructor } from '../interfaces/Property';

export default class Property {
	public address: string;
	public bathrooms: number;
	public cost: number;
	public favorite?: boolean | null;
	public image: string;
	public name: string;
	public qualification?: number;
	public rooms: number;
	public surface: {
		heigth?: number | null;
		lenght: number;
		unit: 'ft';
		width: number;
	};

	constructor({
		address,
		bathrooms,
		cost,
		favorite,
		image,
		name,
		qualification,
		rooms,
		surface,
	}: IPropertyConstructor) {
		this.address = address;
		this.bathrooms = bathrooms;
		this.cost = cost;
		this.favorite = favorite;
		this.image = image;
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
