function amortizationTable(arrayInput, remainingBalance){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '750px';
    tbl.style.border = '1px solid black';
    
    for(var index = 0; index < arrayInput.length; index++){
      var tr = tbl.insertRow();          
      var td = tr.insertCell();
      
      td.appendChild(document.createTextNode("Payment Number: " + (index + 1) + "................"));
      td.style.border = '1px solid black';      
      td.appendChild(document.createTextNode("Interest Payment: $" + arrayInput[index].toFixed(2) + "................"));
      td.style.border = '1px solid black';
      td.appendChild(document.createTextNode(" Remaining Balance: $" + remainingBalance[index]));
      td.style.border = '1px solid black';                
    }

    body.appendChild(tbl);
}
