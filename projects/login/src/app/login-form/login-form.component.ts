import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import * as M from "materialize-css";
import { AuthService } from "../../services/auth.service";
import { JwtService } from "../../../../common/src/services/jwt.service";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

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
	            private router: Router,
	            private jwtService: JwtService) {
	}

	ngOnInit(): void {
		M.updateTextFields();
		this.navigateIfLoggedIn();
	}

	async onSubmit() {
		const username = this.loginForm.get("username")?.value;
		const password = this.loginForm.get("password")?.value;
		const res = await this.authService.login({username, password});
		this.jwtService.setToken(res.token);
		this.navigateExternal();
	}

	private navigateExternal() {
		window.location.href = environment.adminBaseUrl;
	}

	private navigateIfLoggedIn() {
		this.jwtService.validate()
			.then(() => this.navigateExternal());
	}
}
