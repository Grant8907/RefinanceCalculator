function main() {
  // Variables
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
  // document.write("<br>currentLoanInterestPaid = " + currentLoanInterestPaid[0]);
  // document.write("<br>currentLoanTotalInterest = " + currentLoanTotalInterest[0]);
  
  // Calculate remaining interest on current loan
  currentLoanRemainingInterest = currentLoanTotalInterest[0] - currentLoanInterestPaid[0];
  // document.write("<br>currentLoanRemainingInterest = " + currentLoanRemainingInterest);
  
  // Input for loan refinance
  loanAmount = prompt("What would your new loan amount be?", 255000);
  interestRate = prompt("What would your new interest rate be as a percentage?", 3.625);
  loanTermYears = prompt("What will be the new term in years for the loan?", 30);
  closingCosts = prompt("What are the closing costs for the refinance?", 1000);
  
  // Convert input to numbers
  loanAmount = Number(loanAmount);
  interestRate = Number(interestRate);
  loanTermYears = Number(loanTermYears);
  closingCosts = Number(closingCosts);
  
  // Amortize the refinance loan and total cost with closing
  refinanceLoanInterest = amortization(loanAmount, interestRate, loanTermYears);
  //document.write("<br>refinanceLoanInterest = " + refinanceLoanInterest[0]);
  refinanceLoanTotalCost = Number(refinanceLoanInterest[0]) + Number(closingCosts);
  //document.write("<br>Total cost to refinance the loan including interest: $" + refinanceLoanTotalCost.toFixed(2));
  
  refinance = compareLoans(currentLoanRemainingInterest, refinanceLoanTotalCost);
  
  if (refinance > 50000) {
    output = "<h1>You should definitely refinance!</h1><p>You will save $" + refinance.toFixed(2) + " over the life of your new loan.</p>";
  } else if (refinance > 10000) {
    output = "<h1>You should refinance.</h1><p>You will save $" + refinance.toFixed(2) + " over the life of your new loan.</p>";
  } else if (refinance > 0) {
    output = "<h1>You could refinance for a minimal savings.</h1><p>You will save $" + refinance.toFixed(2) + " over the life of your new loan.</p>";  
  } else {
    output = "<h1>Don't refinance.</h1><p>You will lose $" + Math.abs(refinance).toFixed(2) + " over the life of your new loan.</p>";
  }
  
  output += "<p>Total interest to be paid over remaining current loan: $" + currentLoanRemainingInterest.toFixed(2) + "</p>";
  output += "<p>Total cost of refinancing (closing costs plus interest): $" + refinanceLoanTotalCost.toFixed(2) + "</p>"; 
  
  output += "<p>For best readability, please refresh the page between button clicks.</p>"
  
  document.getElementById("main").innerHTML = output;
  
  // document.write(amortizationResult);
  
    document.getElementById("amortizationTableButton").onclick = function() {amortizationTable(refinanceLoanInterest[2], refinanceLoanInterest[3])};
    document.getElementById("currentLoanButton").onclick = function() {amortizationTable(currentLoanTotalInterest[2], currentLoanTotalInterest[3])};
    //document.getElementById("amortizationTableButton").setAttribute('onclick', amortizationTable(refinanceLoanInterest[2], refinanceLoanInterest[3]));
}


main();