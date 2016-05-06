function main() {

  var closingCosts = 0;
  var currentLoanRemainingInterest = 0;
  var currentLoanInterestPaid = [];
  var currentLoanTotalInterest = [];
  var interestRate = 0;
  var loanAmount = 0;
  var loanTermYears = 0;
  var numberPayments = 0;
  var output = "";
  var refinance;
  var refinanceLoanInterest = 0;
  var refinanceLoanTotalCost = 0;
  
  // Input for current loan details.
  loanAmount = prompt("What is the your current original loan amount?", 260000);
  interestRate = prompt("What is your current interest rate as a percentage?", 4.125);
  loanTermYears = prompt("What was the original term in years for the loan?", 30);
  numberPayments = prompt("How many payments have been made so far?", 6);
  
  // Convert input to numbers
  loanAmount = Number(loanAmount);
  interestRate = Number(interestRate);
  loanTermYears = Number(loanTermYears);
  numberPayments = Number(numberPayments);
  
  // Calculate total interest
  currentLoanInterestPaid = calculateRemainingBalance(loanAmount, interestRate, loanTermYears, numberPayments);
  currentLoanTotalInterest = amortization(loanAmount, interestRate, loanTermYears);
  document.write("<br>currentLoanInterestPaid = " + currentLoanInterestPaid[0]);
  document.write("<br>currentLoanTotalInterest = " + currentLoanTotalInterest[0]);
  
  currentLoanRemainingInterest = currentLoanTotalInterest[0] - currentLoanInterestPaid[0];
  document.write("<br>currentLoanRemainingInterest = " + currentLoanRemainingInterest);
  
  loanAmount = prompt("What would your new loan amount be?", 255000);
  interestRate = prompt("What would your new interest rate be as a percentage?", 3.625);
  loanTermYears = prompt("What will be the new term in years for the loan?", 30);
  closingCosts = prompt("What are the closing costs for the refinance?", 1000);
  
  // Convert input to numbers
  loanAmount = Number(loanAmount);
  interestRate = Number(interestRate);
  loanTermYears = Number(loanTermYears);
  closingCosts = Number(closingCosts);
  
  refinanceLoanInterest = amortization(loanAmount, interestRate, loanTermYears);
  document.write("<br>refinanceLoanInterest = " + refinanceLoanInterest[0]);
  refinanceLoanTotalCost = Number(refinanceLoanInterest[0]) + Number(closingCosts);
  document.write("<br>refinanceLoanTotalCost = " + refinanceLoanTotalCost.toFixed(2));
  
  refinance = compareLoans(currentLoanRemainingInterest, refinanceLoanTotalCost);
  
  if (refinance) {
    output = "Refinance.";
  } else {
    output = "Don't refinance.";
  }
  
  document.write("<br>" + output);
}

main();


/*
var payment = 0;

payment = calculatePayment(100000, 30, 0.035);
  
remove this for final build
document.write(payment);
  
var loanDetails = [];


loanDetails = amortization(100000, 0.035, 1000, 30);

var loanAmount = 100000;
var interestRate = 0.035;
var loanTermYears = 30;
var numberPayments = 20;

remainingBalance = calculateRemainingBalance(loanAmount, interestRate, loanTermYears, numberPayments);


document.write("Total interest is " + loanDetails[0] + " after " + loanDetails[1] + " payments.");

*/