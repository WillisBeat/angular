import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteOptgroupExampleComponent } from './autocomplete-optgroup-example.component';

describe('AutocompleteOptgroupExampleComponent', () => {
  let component: AutocompleteOptgroupExampleComponent;
  let fixture: ComponentFixture<AutocompleteOptgroupExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteOptgroupExampleComponent]
    });
    fixture = TestBed.createComponent(AutocompleteOptgroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
