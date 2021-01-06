import { Identifiable } from "./Identifiable";
import { Post } from  "./Post"

export interface Tag extends Identifiable {
	id: number;
	name: string;
	posts: Post[];
}