function calculateRemainingBalance(loanAmount, interestRate, loanTermYears, numberPayments) {

  var loanTermMonths = loanTermYears * 12;
  var interestRateMonthly = interestRate / 12;
  var totalInterest = 0;
  var paymentCount = 1;
  var remainingBalance = loanAmount;
  
  interestRateMonthly /= 100;
  
  while (paymentCount <= numberPayments){
    totalInterest += (remainingBalance * interestRateMonthly);
    remainingBalance = loanAmount * ((Math.pow((1 + interestRateMonthly), loanTermMonths)) - ((Math.pow((1 + interestRateMonthly), paymentCount)))) / ((Math.pow((1 + interestRateMonthly), loanTermMonths)) - 1);
    remainingBalance = remainingBalance.toFixed(2);
    if (remainingBalance > 0) {
      paymentCount += 1;
    }
    // document.write(remainingBalance + "<br>");
  }
  
  return [totalInterest.toFixed(2), paymentCount];
}