import { Identifiable } from "./Identifiable";
import { User } from  "./User"
import { Post } from  "./Post"

export interface Comment extends Identifiable {
	id: number;
	user: User;
	post: Post;
	body: string;
}