import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./post-list/post-list.component";
import { PostComponent } from "./post/post.component";

const routes: Routes = [
	{
		path: "post/:id",
		component: PostComponent,
	},
	{
		path: "**",
		component: PostListComponent,
		pathMatch: "full"
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class BlogRoutingModule {
}
