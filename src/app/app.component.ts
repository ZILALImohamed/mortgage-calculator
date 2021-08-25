import {Component} from '@angular/core';
import {ISummary} from "./core/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  summary: ISummary = {
    numberOfPaymentTerm: 0,
    monthlyPayment: 0,
    prepayment: 0
  };
}
