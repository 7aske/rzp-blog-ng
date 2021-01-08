import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../../../../../common/src/@types/entity/Post";
import { environment } from "../../../environments/environment";

@Component({
	selector: "admin-post-list-item",
	templateUrl: "./post-list-item.component.html",
	styleUrls: ["./post-list-item.component.scss"],
})
export class PostListItemComponent implements OnInit {
	public blogUrl = environment.blogBaseUrl;
	@Input()
	public post: Post;

	constructor() {
	}

	ngOnInit(): void {
	}

}
