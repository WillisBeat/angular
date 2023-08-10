import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteSimpleExampleComponent } from './autocomplete/autocomplete-simple-example/autocomplete-simple-example.component';
import { AutocompleteFilterExampleComponent } from './autocomplete/autocomplete-filter-example/autocomplete-filter-example.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {NgFor} from "@angular/common";
import { AutocompleteDisplayExampleComponent } from './autocomplete/autocomplete-display-example/autocomplete-display-example.component';
import { AutocompleteAutoActiveFirstOptionExampleComponent } from './autocomplete/autocomplete-auto-active-first-option-example/autocomplete-auto-active-first-option-example.component';
import { AutocompletePlainInputExampleComponent } from './autocomplete/autocomplete-plain-input-example/autocomplete-plain-input-example.component';
import { AutocompleteOptgroupExampleComponent } from './autocomplete/autocomplete-optgroup-example/autocomplete-optgroup-example.component';
import { BadgeOverviewExampleComponent } from './badge/badge-overview-example/badge-overview-example.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteSimpleExampleComponent,
    AutocompleteFilterExampleComponent,
    AutocompleteDisplayExampleComponent,
    AutocompleteAutoActiveFirstOptionExampleComponent,
    AutocompletePlainInputExampleComponent,
    AutocompleteOptgroupExampleComponent,
    BadgeOverviewExampleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    NgFor,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
