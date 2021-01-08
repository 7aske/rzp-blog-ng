import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "../guards/admin.guard";
import { PostListComponent } from "./post-list/post-list.component";
import { EditPostComponent } from "./edit-post/edit-post.component";

const routes: Routes = [
	{
		path: "",
		canActivate: [AdminGuard],
		children: [
			{
				path: "",
				component: PostListComponent,
			},
			{
				path: "edit",
				component: EditPostComponent,
			},
			{
				path: "edit/:id",
				component: EditPostComponent,
			},
			// {
			// 	path: "**",
			// 	redirectTo: "",
			// 	pathMatch: "full"
			// },
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {
}
