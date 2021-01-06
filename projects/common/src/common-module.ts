import { NgModule } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
	imports: [
		MatToolbarModule,
	],
	exports: [
		NavbarComponent,
	],
	declarations: [
		NavbarComponent,
	],
	providers: [],
	bootstrap: [],
})
export class CommonModule { }
