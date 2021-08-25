import {getMonthlyPayments, getPaymentFrequency} from "./util";
import {PaymentFrequency} from "./interfaces";

describe('Util', () => {
  it('should calculate monthly payment correctly', () => {
    expect(getMonthlyPayments(100000, 0.5, 25 * 12)).toEqual(50000);
  });

  it('should return the correct payment frequency', () => {
    expect(getPaymentFrequency(PaymentFrequency.AcceleratedWeekly)).toEqual(52)
    expect(getPaymentFrequency(PaymentFrequency.Weekly)).toEqual(52)
    expect(getPaymentFrequency(PaymentFrequency.AcceleratedBiWeekly)).toEqual(26)
    expect(getPaymentFrequency(PaymentFrequency.BiWeekly)).toEqual(26)
    expect(getPaymentFrequency(PaymentFrequency.SemiMonthly)).toEqual(24)
    expect(getPaymentFrequency(PaymentFrequency.Monthly)).toEqual(12)
  });
});
