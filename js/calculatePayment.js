function calculatePayment(loanAmount, loanTermYears, interestRate) {
  
  // variables
  var loanTermMonths = loanTermYears * 12;
  var interestRateMonthly = interestRate / 12;
  var payment = 0;
  
  // convert interest rate to decimal from percentage
  interestRateMonthly /= 100;
  
  // calculate payment
  payment = loanAmount * (interestRateMonthly * (Math.pow((1 + interestRateMonthly), loanTermMonths))) / (((Math.pow((1 + interestRateMonthly), loanTermMonths))) - 1);
  
  // return payment
  return(payment.toFixed(2));
}