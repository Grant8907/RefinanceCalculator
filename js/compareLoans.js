function compareLoans(currentLoanTotalInterest, refinanceLoanTotalCost) {
  var refinance;
  
  if (currentLoanTotalInterest >= refinanceLoanTotalCost) {
    refinance = true;
  } else {
    refinance = false;
  }
  return(refinance);
}