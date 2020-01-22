import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyEmployeeComponent } from './dummy-employee.component';

describe('DummyEmployeeComponent', () => {
  let component: DummyEmployeeComponent;
  let fixture: ComponentFixture<DummyEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
