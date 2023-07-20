import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteAutoActiveFirstOptionExampleComponent } from './autocomplete-auto-active-first-option-example.component';

describe('AutocompleteAutoActiveFirstOptionExampleComponent', () => {
  let component: AutocompleteAutoActiveFirstOptionExampleComponent;
  let fixture: ComponentFixture<AutocompleteAutoActiveFirstOptionExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteAutoActiveFirstOptionExampleComponent]
    });
    fixture = TestBed.createComponent(AutocompleteAutoActiveFirstOptionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
