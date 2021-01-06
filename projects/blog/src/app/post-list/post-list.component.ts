import { Component, OnInit } from "@angular/core";
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
		setTimeout(()=>{
			this.postService.getAll()
				.then(_posts => this.posts = _posts);
		}, 2000);
	}

}
