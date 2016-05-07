function calculateRemainingBalance(loanAmount, interestRate, loanTermYears, numberPayments) {

  // variables
  var loanTermMonths = loanTermYears * 12;
  var interestRateMonthly = interestRate / 12;
  var totalInterest = 0;
  var paymentCount = 1;
  var remainingBalance = loanAmount;
  
  // convert interest rate to decimal from percentage
  interestRateMonthly /= 100;
  
  // calculate the remaining balance based on the number of payments already received
  while (paymentCount <= numberPayments){
    totalInterest += (remainingBalance * interestRateMonthly);
    remainingBalance = loanAmount * ((Math.pow((1 + interestRateMonthly), loanTermMonths)) - ((Math.pow((1 + interestRateMonthly), paymentCount)))) / ((Math.pow((1 + interestRateMonthly), loanTermMonths)) - 1);
    remainingBalance = remainingBalance.toFixed(2);
    if (remainingBalance > 0) {
      paymentCount += 1;
    }
  }
  
  // output the total interest paid and number of payments
  return [totalInterest.toFixed(2), paymentCount];
}