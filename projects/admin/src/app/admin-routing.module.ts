import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "../guards/admin.guard";
import { PostListComponent } from "./post-list/post-list.component";

const routes: Routes = [
	{
		path: "",
		canActivate: [AdminGuard],
		children: [
			{
				path: "",
				component: PostListComponent,
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
