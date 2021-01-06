import { Identifiable } from "./Identifiable";

export interface Category extends Identifiable {
	id: number;
	name: string;
}