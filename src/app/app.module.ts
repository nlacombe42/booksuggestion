import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {BookSuggestionsComponent} from "./book-suggestions/book-suggestions.component";

@NgModule({
	declarations: [
		AppComponent,
		BookSuggestionsComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
