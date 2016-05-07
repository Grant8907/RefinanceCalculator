function amortizationTable(interestPaymentAmortization, remainingBalance){
    // variables
    var body = document.body;
    var tbl  = document.createElement('table');
    
    // set table size
    tbl.style.width  = '750px';
    tbl.style.border = '1px solid black';
    
    // populate table with the amortization array values
    for(var index = 0; index < interestPaymentAmortization.length; index++){
      var tr = tbl.insertRow();          
      var td = tr.insertCell();
      
      td.appendChild(document.createTextNode("Payment Number: " + (index + 1) + "................"));
      td.style.border = '1px solid black';      
      td.appendChild(document.createTextNode("Interest Payment: $" + interestPaymentAmortization[index].toFixed(2) + "................"));
      td.style.border = '1px solid black';
      td.appendChild(document.createTextNode(" Remaining Balance: $" + remainingBalance[index]));
      td.style.border = '1px solid black';                
    }

    body.appendChild(tbl);
}
