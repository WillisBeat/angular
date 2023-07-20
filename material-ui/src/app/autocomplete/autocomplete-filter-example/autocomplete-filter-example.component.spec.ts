import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteFilterExampleComponent } from './autocomplete-filter-example.component';

describe('AutocompleteFilterExampleComponent', () => {
  let component: AutocompleteFilterExampleComponent;
  let fixture: ComponentFixture<AutocompleteFilterExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteFilterExampleComponent]
    });
    fixture = TestBed.createComponent(AutocompleteFilterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
