import {Component} from "@angular/core";

@Component({
	selector: 'book-suggestions',
	templateUrl: './book-suggestions.component.html',
	styleUrls: ['./book-suggestions.component.css']
})
export class BookSuggestionsComponent {

	books = [
		{genre: "Sci-Fi", author: "Isaac Asimov", yearOfPublication: 1952, numberOfPages: 1000, rating: 4.5},
		{genre: "Horror", author: "Stephen King", yearOfPublication: 1980, numberOfPages: 2000, rating: 4.0}
	];

	constructor() {
	}

}
