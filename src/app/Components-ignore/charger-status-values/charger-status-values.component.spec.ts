import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerStatusValuesComponent } from './charger-status-values.component';

describe('ChargerStatusValuesComponent', () => {
  let component: ChargerStatusValuesComponent;
  let fixture: ComponentFixture<ChargerStatusValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargerStatusValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargerStatusValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
