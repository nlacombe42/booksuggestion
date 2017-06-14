import {Component, OnInit} from "@angular/core";
import {Book} from "./book-suggestions/book.model";
import {BookSuggestionsService} from "./book-suggestions/book-suggestions.service";
import {Preference} from "./preferences/preference-display.model";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	books: Book[] = [];

	constructor(private bookSuggestionsService: BookSuggestionsService) {
	}

	ngOnInit(): void {
		this.getSuggestedBooks([]);
	}

	getSuggestedBooks(preferences: Preference[]) {
		this.bookSuggestionsService.getBookSuggestions(preferences)
			.subscribe(books => {
				this.books = books;
			});
	}
}
