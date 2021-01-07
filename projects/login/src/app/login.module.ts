import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { LoginComponent } from "./login.component";
import { CommonModule } from "../../../common/src/common-module";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from "@angular/common/http";
import {CookieService} from "ngx-cookie-service"
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
	declarations: [
		LoginComponent,
		LoginComponent,
		LoginFormComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		ReactiveFormsModule,
		HttpClientModule,
		LoginRoutingModule,
	],
	providers: [
		CookieService
	],
	bootstrap: [LoginComponent],
})
export class LoginModule {
}
