import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Category } from "../../../common/src/@types/entity/Category";

@Injectable({
	providedIn: "root",
})
export class CategoryService {
	private baseUrl = `${environment.baseUrl}/categories`;

	constructor(private http: HttpClient) {

	}

	public getAll() {
		return this.http.get<Category[]>(`${this.baseUrl}`).toPromise();
	}
}
