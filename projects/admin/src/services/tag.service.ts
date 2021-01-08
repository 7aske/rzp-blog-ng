import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Tag } from "../../../common/src/@types/entity/Tag";

@Injectable({
	providedIn: "root",
})
export class TagService {
	private baseUrl = environment.baseUrl;

	constructor(private http: HttpClient) {
	}

	public getAll() {
		return this.http.get<Tag[]>(`${this.baseUrl}`).toPromise();
	}
}
