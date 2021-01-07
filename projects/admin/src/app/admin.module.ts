import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonModule } from "projects/common/src/common-module";
import { NgxPaginationModule } from "ngx-pagination";
import { PostListComponent } from './post-list/post-list.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoggingInterceptor } from "../../../common/src/services/interceptors/logging.interceptor";

@NgModule({
	declarations: [
		AdminComponent,
		PostListComponent,
	],
	imports: [
		AdminRoutingModule,
		BrowserModule,
		CommonModule,
		NgxPaginationModule,
	],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
	],
	bootstrap: [AdminComponent],
})
export class AdminModule {
}
