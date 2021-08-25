import {Component, Input, OnInit} from '@angular/core';
import {ISummary} from "../core/interfaces";

@Component({
  selector: 'app-calculation-summary-table',
  templateUrl: './calculation-summary-table.component.html',
  styleUrls: ['./calculation-summary-table.component.css']
})
export class CalculationSummaryTableComponent implements OnInit {
  @Input() summary!: ISummary;

  constructor() {
  }

  ngOnInit(): void {
  }
}
