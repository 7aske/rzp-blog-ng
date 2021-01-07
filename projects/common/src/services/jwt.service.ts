import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";
import { CookieService } from "ngx-cookie-service";
import { AuthService } from "../../../login/src/services/auth.service";

export interface JwtToken {
	roles: string[]
}

@Injectable({
	providedIn: "root",
})
export class JwtService {
	constructor(private cookieService: CookieService,
	            private authService: AuthService) {
	}

	public decodeToken(token: string) {
		return jwtDecode(token) as JwtToken;
	}

	public getToken(): JwtToken {
		return this.decodeToken(this.cookieService.get("token"));
	}

	public setToken(token: string): void {
		this.cookieService.set("token", token, {path: "/"});
	}

	public validate() {
		return this.authService.validate(this.cookieService.get("token"));
	}
}

