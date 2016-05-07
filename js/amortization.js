function amortization(loanAmount, interestRate, loanTermYears) {
  
  // variables
  var loanTermMonths = loanTermYears * 12;
  var interestRateMonthly = interestRate / 12;
  var totalInterest = 0;
  var paymentCount = 1;
  var remainingBalance = loanAmount;
  var remainingBalanceAmortization = [];
  var interestPayment = 0;
  var interestPaymentAmortization = [];
  
  // convert interest rate to decimal from percentage
  interestRateMonthly /= 100;
  
  // loop through the loan payoff to create the amortization array and calculate the total interest
  while (remainingBalance > 0){
    interestPayment = remainingBalance * interestRateMonthly;
    interestPaymentAmortization.push(interestPayment);
    
    totalInterest += remainingBalance * interestRateMonthly;
    
    remainingBalance = loanAmount * ((Math.pow((1 + interestRateMonthly), loanTermMonths)) - ((Math.pow((1 + interestRateMonthly), paymentCount)))) / ((Math.pow((1 + interestRateMonthly), loanTermMonths)) - 1);
    
    remainingBalance = remainingBalance.toFixed(2);
    remainingBalanceAmortization.push(remainingBalance);
    
    if (remainingBalance > 0) {
      paymentCount += 1;
    }
  }
  
  // output the total interest, number of payments, interest payment amortization array, and remaining balance amortization array.
  return [totalInterest.toFixed(2), paymentCount, interestPaymentAmortization, remainingBalanceAmortization];

}
