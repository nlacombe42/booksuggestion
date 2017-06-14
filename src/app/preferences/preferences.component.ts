import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Preference} from "./preference-display.model";
import {PreferenceDisplay} from "./preference.model";

@Component({
	selector: 'preferences',
	templateUrl: './preferences.component.html',
	styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

	@Output() preferencesChange: EventEmitter<Preference[]> = new EventEmitter<Preference[]>();

	fields = [
		{name: "Author", value: "AUTHOR"},
		{name: "Genre", value: "GENRE"},
		{name: "Number of Pages", value: "NUMBER_OF_PAGES"},
		{name: "Publication Era", value: "PUBLICATION_ERA"}
	];

	publicationEras = [
		{name: "Classic", value: "CLASSIC"},
		{name: "Modern", value: "MODERN"}
	];

	selectedField = null;
	fieldValue = null;

	preferences: Preference[] = [];
	preferencesDisplay: PreferenceDisplay[] = [];

	constructor() {
	}

	ngOnInit() {
	}

	clearFieldValue() {
		this.fieldValue = null;
	}

	addPreference() {
		let displayValue = this.selectedField.value === 'PUBLICATION_ERA' ?
			this.getPublicationEraName(this.fieldValue) : this.fieldValue;

		this.preferences.push({
			field: this.selectedField.value,
			value: this.fieldValue
		});

		this.preferencesDisplay.push({
			field: this.selectedField.value,
			value: this.fieldValue,
			displayName: this.selectedField.name,
			displayValue
		});

		this.clearFieldValue();

		this.preferencesChange.emit(this.preferences);
	}

	clearPreference() {
		this.preferences = [];
		this.preferencesDisplay = [];

		this.preferencesChange.emit(this.preferences);
	}

	private getPublicationEraName(publicationEraValue: string): string {
		for (let publicationEra of this.publicationEras) {
			if (publicationEra.value === publicationEraValue) {
				return publicationEra.name;
			}
		}

		return null;
	}

}
