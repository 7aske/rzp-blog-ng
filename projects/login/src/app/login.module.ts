import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { LoginComponent } from "./login.component";
import { CommonModule } from "../../../common/src/common-module";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
	declarations: [
		LoginComponent,
		LoginComponent,
		LoginFormComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		MatRadioModule,
		MatCardModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [LoginComponent],
})
export class LoginModule {
}
