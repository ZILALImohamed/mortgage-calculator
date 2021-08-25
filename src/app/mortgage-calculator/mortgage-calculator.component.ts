import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {

  mortgageCalculatorFormGroup: FormGroup;

  constructor() {
    this.mortgageCalculatorFormGroup = new FormGroup({})
  }

  ngOnInit(): void {
  }

}
