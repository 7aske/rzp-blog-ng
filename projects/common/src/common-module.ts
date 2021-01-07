import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ScrollToFloatComponent } from "./components/scroll-to-float/scroll-to-float.component";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	imports: [
		ScrollToModule,
		BrowserModule,
		HttpClientModule,
	],
	exports: [
		NavbarComponent,
		ScrollToFloatComponent,
	],
	declarations: [
		NavbarComponent,
		ScrollToFloatComponent,
	],
	providers: [],
	bootstrap: [],
})
export class CommonModule {
}
