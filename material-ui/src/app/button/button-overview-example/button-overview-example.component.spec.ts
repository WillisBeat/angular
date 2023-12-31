import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOverviewExampleComponent } from './button-overview-example.component';

describe('ButtonOverviewExampleComponent', () => {
  let component: ButtonOverviewExampleComponent;
  let fixture: ComponentFixture<ButtonOverviewExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonOverviewExampleComponent]
    });
    fixture = TestBed.createComponent(ButtonOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
