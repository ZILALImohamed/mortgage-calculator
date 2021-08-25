import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PaymentFrequencies, PaymentFrequency, PrePaymentFrequencies, PrePaymentFrequency} from "../core/interfaces";
import {getMonthlyPayments, getPaymentFrequency} from "../core/util";

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements AfterViewInit {
  @Input() summary: any;
  @Output() summaryChange = new EventEmitter<any>();

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
    });
  }

  ngAfterViewInit(): void {
    this.submit();
  }

  submit(): void {
    const term = this.mortgageCalculatorFormGroup.get('term')?.value;
    const paymentFrequency = getPaymentFrequency(this.mortgageCalculatorFormGroup.get('paymentFrequency')?.value);
    const mortgageAmount = this.mortgageCalculatorFormGroup.get('mortgageAmount')?.value;
    const interestRate = this.mortgageCalculatorFormGroup.get('interestRate')?.value / 100;
    const amortizationPeriod = this.mortgageCalculatorFormGroup.get('amortizationPeriodYears')?.value * 12
      + this.mortgageCalculatorFormGroup.get('amortizationPeriodMonths')?.value;

    this.summaryChange.emit({
      prepayment: this.mortgageCalculatorFormGroup.get('prepaymentAmount')?.value,
      monthlyPayment: getMonthlyPayments(mortgageAmount, interestRate / 12, amortizationPeriod),
      numberOfPaymentTerm: term * paymentFrequency
    })
  }
}
