import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';
import { CalculationSummaryTableComponent } from './calculation-summary-table/calculation-summary-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MortgageCalculatorComponent,
    CalculationSummaryTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
