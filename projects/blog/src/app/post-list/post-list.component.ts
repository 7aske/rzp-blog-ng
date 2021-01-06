import { Component, OnInit, Input } from "@angular/core";
import { PostService } from "../../services/post.service";
import { Post } from "../../../../common/src/@types/entity/Post";

@Component({
	selector: "blog-blog-list",
	templateUrl: "./post-list.component.html",
	styleUrls: ["./post-list.component.scss"],
})
export class PostListComponent implements OnInit {
	public posts: Post[] = [];

	constructor(private postService: PostService) {
	}

	ngOnInit(): void {
		this.postService.getAll()
			.then(_posts => this.posts = _posts);
	}

}