import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-autocomplete-filter-example',
  templateUrl: './autocomplete-filter-example.component.html',
  styleUrls: ['./autocomplete-filter-example.component.css']
})
export class AutocompleteFilterExampleComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions !: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();

    return this.options.filter(option => option.toLocaleLowerCase().includes((filterValue)))
  }
}
