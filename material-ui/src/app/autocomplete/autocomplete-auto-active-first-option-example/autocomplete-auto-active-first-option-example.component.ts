import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-autocomplete-auto-active-first-option-example',
  templateUrl: './autocomplete-auto-active-first-option-example.component.html',
  styleUrls: ['./autocomplete-auto-active-first-option-example.component.css']
})
export class AutocompleteAutoActiveFirstOptionExampleComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
