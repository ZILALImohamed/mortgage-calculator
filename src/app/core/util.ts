import {PaymentFrequency} from "./interfaces";

export function getMonthlyPayments(principal: number, annualPercentageRate: number, lengthOfLoan: number) {
  return (principal * annualPercentageRate) / (1 - Math.pow(1 + annualPercentageRate, -lengthOfLoan))
}


export function getPaymentFrequency(paymentFrequency: PaymentFrequency) {
  switch (paymentFrequency) {
    case PaymentFrequency.AcceleratedWeekly:
    case PaymentFrequency.Weekly:
      return 52;
    case PaymentFrequency.AcceleratedBiWeekly:
    case PaymentFrequency.BiWeekly:
      return 26;
    case PaymentFrequency.SemiMonthly:
      return 24;
    case PaymentFrequency.Monthly:
      return 12;
  }
}
