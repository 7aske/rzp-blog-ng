import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BlogRoutingModule } from "./blog-routing.module";
import { BlogComponent } from "./blog.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "../../../common/src/common-module";
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoggingInterceptor } from "../services/interceptors/logging.interceptor";
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { PostComponent } from './post/post.component';

@NgModule({
	declarations: [
		BlogComponent,
		PostListComponent,
		PostListItemComponent,
		PostComponent,
	],
	imports: [
		BrowserModule,
		BlogRoutingModule,
		BrowserAnimationsModule,
		CommonModule,
		HttpClientModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
	],
	bootstrap: [BlogComponent],
})
export class BlogModule {
}
