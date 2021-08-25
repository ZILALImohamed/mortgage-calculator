import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PaymentFrequencies, PaymentFrequency, PrePaymentFrequencies, PrePaymentFrequency} from "../core/interfaces";

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {

  mortgageCalculatorFormGroup: FormGroup;
  amortizationPeriodYearsList = Array.from({length: 30}, (_, i) => i + 1);
  amortizationPeriodMonthsList = Array.from({length: 11}, (_, i) => i + 1);
  termYearsList = Array.from({length: 10}, (_, i) => i + 1);
  PaymentFrequencies = PaymentFrequencies;
  PrePaymentFrequencies = PrePaymentFrequencies;

  constructor() {
    this.mortgageCalculatorFormGroup = new FormGroup({
      mortgageAmount: new FormControl(100000.00, Validators.required),
      interestRate: new FormControl(5, [Validators.required, Validators.min(0.0), Validators.max(100)]),
      amortizationPeriodYears: new FormControl(25, Validators.required),
      amortizationPeriodMonths: new FormControl(0, Validators.required),
      paymentFrequency: new FormControl(PaymentFrequency.Monthly, Validators.required),
      term: new FormControl(5, Validators.required),
      prepaymentAmount: new FormControl(0, Validators.required),
      prepaymentFrequency: new FormControl(PrePaymentFrequency.OneTime, Validators.required),
      startWithPayment: new FormControl(1, Validators.required),
    })
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.mortgageCalculatorFormGroup.getRawValue());
  }
}
