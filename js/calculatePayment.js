function calculatePayment(loanAmount, loanTermYears, interestRate) {
  var loanTermMonths = loanTermYears * 12;
  var interestRateMonthly = interestRate / 12;
  var payment = 0;
  
  interestRateMonthly /= 100;
  
  payment = loanAmount * (interestRateMonthly * (Math.pow((1 + interestRateMonthly), loanTermMonths))) / (((Math.pow((1 + interestRateMonthly), loanTermMonths))) - 1);
  
  return(payment.toFixed(2));
}