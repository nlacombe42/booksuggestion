import {Injectable} from "@angular/core";
import {Book} from "./book.model";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class BookSuggestionsService {

	private url: string = "http://localhost:8001/v1/books/suggestions";

	constructor(private http: Http) {
	}

	getBookSuggestions(preferences): Observable<Book[]> {

		let headers = new Headers({"Content-Type": "application/json"});
		let options = new RequestOptions({headers: headers});

		let requestData = {
			pageRequest: {
				pageNumber: 0,
				elementsPerPage: 5
			},
			orderedPreferenceCriteria: preferences
		};

		return this.http.post(this.url, requestData, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();

		return body.elements || [];
	}

	private handleError(error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
	}

}
