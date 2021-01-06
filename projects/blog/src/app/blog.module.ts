import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BlogRoutingModule } from "./blog-routing.module";
import { BlogComponent } from "./blog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "../../../common/src/common-module";
import { PostListComponent } from "./post-list/post-list.component";
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { LoggingInterceptor } from "../services/interceptors/logging.interceptor";
import { PostListItemComponent } from "./post-list/post-list-item/post-list-item.component";
import { PostComponent } from "./post/post.component";
import { MarkdownModule, MarkedOptions } from "ngx-markdown";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { PostListSkeletonComponent } from './post-list/post-list-skeleton/post-list-skeleton.component';
import { NgxPaginationModule } from "ngx-pagination";
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
	declarations: [
		BlogComponent,
		PostListComponent,
		PostListItemComponent,
		PostComponent,
		PostListSkeletonComponent,
	],
	imports: [
		BrowserModule,
		BlogRoutingModule,
		BrowserAnimationsModule,
		ScrollToModule.forRoot(),
		NgxPaginationModule,
		CommonModule,
		HttpClientModule,
		MarkdownModule.forRoot({
			loader: HttpClient,
			markedOptions: {
				provide: MarkedOptions,
				useValue: {
					gfm: true,
					breaks: false,
					pedantic: false,
					smartLists: true,
					smartypants: false,
				},
			},
		}),
		NgxSkeletonLoaderModule,
	],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
	],
	bootstrap: [BlogComponent],
})
export class BlogModule {
}
