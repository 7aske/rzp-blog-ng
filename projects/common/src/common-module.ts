import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ScrollToFloatComponent } from "./components/scroll-to-float/scroll-to-float.component";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ToDatePipe } from "./pipes/to-date.pipe";

@NgModule({
	imports: [
		ScrollToModule,
		BrowserModule,
		HttpClientModule,
	],
	exports: [
		NavbarComponent,
		ScrollToFloatComponent,
		ToDatePipe,
	],
	declarations: [
		NavbarComponent,
		ScrollToFloatComponent,
		ToDatePipe,
	],
	providers: [],
	bootstrap: [],
})
export class CommonModule {
}
