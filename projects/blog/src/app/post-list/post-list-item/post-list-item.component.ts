import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../../../../../common/src/@types/entity/Post";

@Component({
	selector: "blog-post-list-item",
	templateUrl: "./post-list-item.component.html",
	styleUrls: ["./post-list-item.component.scss"],
})
export class PostListItemComponent implements OnInit {
	@Input
	public post: Post;

	constructor() {
	}

	ngOnInit(): void {
	}

}
