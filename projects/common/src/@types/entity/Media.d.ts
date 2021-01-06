import { Identifiable } from "./Identifiable";

export interface Media extends Identifiable {
	id: number;
	uri: string;
}