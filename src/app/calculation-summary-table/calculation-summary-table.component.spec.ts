import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationSummaryTableComponent } from './calculation-summary-table.component';

describe('CalculationSummaryTableComponent', () => {
  let component: CalculationSummaryTableComponent;
  let fixture: ComponentFixture<CalculationSummaryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationSummaryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationSummaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
