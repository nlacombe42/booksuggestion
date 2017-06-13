import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule, JsonpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {BookSuggestionsComponent} from "./book-suggestions/book-suggestions.component";
import {BookSuggestionsService} from "./book-suggestions/book-suggestions.service";

@NgModule({
	declarations: [
		AppComponent,
		BookSuggestionsComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		JsonpModule
	],
	providers: [BookSuggestionsService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
