import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeWrapperComponent } from './income-wrapper.component';

describe('IncomeWrapperComponent', () => {
  let component: IncomeWrapperComponent;
  let fixture: ComponentFixture<IncomeWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
