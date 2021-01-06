import { Identifiable } from "./Identifiable";
import { User } from  "./User"

export interface Contact extends Identifiable {
	id: number;
	user: User;
	value: string;
	contactType: string;
}