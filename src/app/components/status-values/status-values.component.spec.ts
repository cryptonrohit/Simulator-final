import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusValuesComponent } from './status-values.component';

describe('StatusValuesComponent', () => {
  let component: StatusValuesComponent;
  let fixture: ComponentFixture<StatusValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
