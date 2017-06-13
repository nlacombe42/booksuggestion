import {Component, OnInit} from "@angular/core";
import {BookSuggestionsService} from "./book-suggestions.service";
import {Book} from "./book.model";
import {Observable} from "rxjs/Observable";

@Component({
	selector: 'book-suggestions',
	templateUrl: './book-suggestions.component.html',
	styleUrls: ['./book-suggestions.component.css']
})
export class BookSuggestionsComponent implements OnInit {

	books: Observable<Book[]>;

	constructor(private bookSuggestionsService: BookSuggestionsService) {
	}

	ngOnInit() {
		this.books = this.bookSuggestionsService.getBookSuggestions();
	}
}
