import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as M from "materialize-css";
import { Category } from "../../../../common/src/@types/entity/Category";
import { CategoryService } from "../../services/category.service";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Post } from "../../../../common/src/@types/entity/Post";
import { PostService } from "../../services/post.service";
import { ToastrService } from "ngx-toastr";
import { User } from "../../../../common/src/@types/entity/User";
import { TagService } from "../../services/tag.service";
import { Tag } from "../../../../common/src/@types/entity/Tag";
import { UserInfoService } from "../../../../common/src/services/user-info.service";

@Component({
	selector: "admin-edit-post",
	templateUrl: "./edit-post.component.html",
	styleUrls: ["./edit-post.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class EditPostComponent implements OnInit {
	private post: Post;
	private user: User;
	public categories: Category[] = [];
	public tags: Tag[] = [];
	public postForm = this.fb.group({
		title: [null, Validators.required],
		slug: [null, Validators.required],
		excerpt: [null, Validators.required],
		category: [null, Validators.required],
		body: [null, Validators.required],
	});
	public postBody: string = "";

	constructor(private fb: FormBuilder,
	            private postService: PostService,
	            private categoryService: CategoryService,
	            private tagService: TagService,
	            private userInfoService: UserInfoService,
	            private toastService: ToastrService,
	            private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		M.updateTextFields();
		const id = this.route.snapshot.paramMap.get("id");
		if (id) {
			this.postService.getById(id)
				.then(_post => this.updatePostForm(_post));
		}
		this.userInfoService.getLoggedInUser().then(_user => {
			this.user = _user;
		});
		this.categoryService.getAll().then(_categories => {
			this.categories = _categories;
			setTimeout(() => this.updateCategoryInput(), 200);
		});
		this.tagService.getAll().then(_tags => {
			this.tags = _tags;
		});
	}

	updatePostForm(_post: Post) {
		this.post = _post;
		this.postForm.setValue({
			title: _post.title,
			slug: _post.slug,
			category: _post.category.id,
			excerpt: _post.excerpt,
			body: _post.body,
		});
		setTimeout(() => {
			M.textareaAutoResize(document.querySelector("textarea"));
			M.updateTextFields();
		}, 200);
	}

	onSubmit() {
		const post: Post = {
			id: this.post ? this.post.id : undefined,
			body: this.postForm.get("body")?.value,
			category: {
				id:this.postForm.get("category")?.value
			},
			user: this.user,
			excerpt: this.postForm.get("excerpt")?.value,
			published: true,
			slug: this.postForm.get("slug")?.value,
			title: this.postForm.get("title")?.value,
		};

		if (post.id) {
			this.postService.update(post)
				.then(() => this.toastService.info("Post saved"))
				.catch(err => this.toastService.error(err.error));
		} else {
			this.postService.save(post)
				.then(() => this.toastService.info("Post saved"))
				.catch(err => this.toastService.error(err.error.error));
		}
	}

	updateCategoryInput() {
		M.FormSelect.init(document.querySelector("#categorySelect"), {
			dropdownOptions: {
				autoTrigger: true,
			},
		});
		// instance.input = document.querySelector("#categorySelectInput");
	}
}
