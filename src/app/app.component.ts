import {Component} from "@angular/core";
import {Book} from "./book-suggestions/book.model";
import {BookSuggestionsService} from "./book-suggestions/book-suggestions.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	books: Book[] = [];

	constructor(private bookSuggestionsService: BookSuggestionsService) {
	}

	getSuggestedBooks(preferences) {
		this.bookSuggestionsService.getBookSuggestions(preferences)
			.subscribe(books => {
				this.books = books;
			});
	}
}
