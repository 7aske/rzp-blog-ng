import { Identifiable } from "./Identifiable";
import { User } from  "./User"
import { Category } from  "./Category"
import { Tag } from  "./Tag"

export interface Post extends Identifiable {
	id: number;
	user: User;
	category: Category;
	title: string;
	excerpt: string;
	body: string;
	datePosted: Date;
	deleted: boolean;
	published: boolean;
	views: number;
	slug: string;
	tags: Tag[];
}