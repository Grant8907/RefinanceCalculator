function amortization(loanAmount, interestRate, loanTermYears) {

  var loanTermMonths = loanTermYears * 12;
  var interestRateMonthly = interestRate / 12;
  var totalInterest = 0;
  var paymentCount = 1;
  var remainingBalance = loanAmount;
  var remainingBalanceAmortization = [];
  var interestPayment = 0;
  var interestPaymentAmortization = [];
  
  interestRateMonthly /= 100;
  
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
    
    // document.write(remainingBalance + "<br>");
  }
  
  // amortizationTable(interestPaymentAmortization, remainingBalanceAmortization);
  return [totalInterest.toFixed(2), paymentCount, interestPaymentAmortization, remainingBalanceAmortization];

}
