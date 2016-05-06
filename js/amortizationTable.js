function makeTableHTML(myArray) {
  var result = "<table border=1>";
  for(var column = 0; column < myArray.length; column++) {
      result += "<tr>";
      for(var row = 0; row < myArray[index].length; row++){
          result += "<td>"+myArray[index][row]+"</td>";
      }
      result += "</tr>";
  }
  result += "</table>";

  return result;
}