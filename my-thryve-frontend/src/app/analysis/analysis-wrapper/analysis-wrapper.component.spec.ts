import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisWrapperComponent } from './analysis-wrapper.component';

describe('AnalysisWrapperComponent', () => {
  let component: AnalysisWrapperComponent;
  let fixture: ComponentFixture<AnalysisWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
