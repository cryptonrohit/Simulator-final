import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtenantValuesComponent } from './subtenant-values.component';

describe('SubtenantValuesComponent', () => {
  let component: SubtenantValuesComponent;
  let fixture: ComponentFixture<SubtenantValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtenantValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtenantValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
