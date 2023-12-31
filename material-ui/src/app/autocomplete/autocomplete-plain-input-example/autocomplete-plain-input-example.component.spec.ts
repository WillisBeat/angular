import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletePlainInputExampleComponent } from './autocomplete-plain-input-example.component';

describe('AutocompletePlainInputExampleComponent', () => {
  let component: AutocompletePlainInputExampleComponent;
  let fixture: ComponentFixture<AutocompletePlainInputExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompletePlainInputExampleComponent]
    });
    fixture = TestBed.createComponent(AutocompletePlainInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
