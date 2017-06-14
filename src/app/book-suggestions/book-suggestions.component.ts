import {Component, Input} from "@angular/core";
import {Book} from "./book.model";

@Component({
	selector: 'book-suggestions',
	templateUrl: './book-suggestions.component.html',
	styleUrls: ['./book-suggestions.component.css']
})
export class BookSuggestionsComponent {

	@Input() books: Book[] = [];

	constructor() {
	}
}
