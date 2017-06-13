import {inject, TestBed} from "@angular/core/testing";

import {BookSuggestionsService} from "./book-suggestions.service";

describe('BookSuggestionsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [BookSuggestionsService]
		});
	});

	it('should be created', inject([BookSuggestionsService], (service: BookSuggestionsService) => {
		expect(service).toBeTruthy();
	}));
});
