import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import * as M from "materialize-css";
import { AuthService } from "../../services/auth.service";
import { CookieService } from "ngx-cookie-service";

@Component({
	selector: "login-login-form",
	templateUrl: "./login-form.component.html",
	styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
	public loginForm = this.fb.group({
		username: [null, Validators.required],
		password: [null, Validators.required],
	});

	constructor(private fb: FormBuilder,
	            private authService: AuthService,
	            private cookieService: CookieService) {
	}

	async onSubmit() {
		const username = this.loginForm.get("username")?.value;
		const password = this.loginForm.get("password")?.value;
		const res = await this.authService.login({username, password});
		this.cookieService.set("token", res.token, {path: "/"});
	}

	ngOnInit(): void {
		M.updateTextFields();
	}
}
