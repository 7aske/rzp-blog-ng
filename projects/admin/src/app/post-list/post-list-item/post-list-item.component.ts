import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../../../../../common/src/@types/entity/Post";
import { environment } from "../../../environments/environment";
import { ConfirmDialogService } from "../../../../../common/src/services/confirm-dialog.service";
import { PostService } from "../../../services/post.service";

@Component({
	selector: "admin-post-list-item",
	templateUrl: "./post-list-item.component.html",
	styleUrls: ["./post-list-item.component.scss"],
})
export class PostListItemComponent implements OnInit {
	public blogUrl = environment.blogBaseUrl;
	@Input()
	public post: Post;

	constructor(private confirmDialogService: ConfirmDialogService,
	            private postService: PostService) {
	}

	ngOnInit(): void {
		M.Tooltip.init(document.querySelectorAll(".tooltipped"), {position: "top"});
	}

	delete() {
		this.confirmDialogService.confirm("Are you sure to delete?", () => {
			this.postService.delete(this.post.id);
		});
	}
}
