import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule, JsonpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {BookSuggestionsComponent} from "./book-suggestions/book-suggestions.component";
import {BookSuggestionsService} from "./book-suggestions/book-suggestions.service";
import {PreferencesComponent} from "./preferences/preferences.component";
import {FormsModule} from "@angular/forms";

@NgModule({
	declarations: [
		AppComponent,
		BookSuggestionsComponent,
		PreferencesComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		JsonpModule,
		FormsModule
	],
	providers: [BookSuggestionsService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
