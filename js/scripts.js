function numberRange(numberInput) {
  var range = [];
  for (var i = numberInput; i >= 0; i--) {
    range.push(i);
  }
  console.log(range)
  rangeTranslator(range)
}

function rangeTranslator(range) {
  // var modifierNumbers = ["3"]
  var rangeString = range.toString();
  var translatedString = rangeString.replace(/3/g, "sorry");
  console.log(translatedString)
  // for (var i = 0; i < rangeString.length;) {
  //   if (modifierNumbers.includes(rangeString[i])) {
  //     alert("the index of the three is " + [i])
  //     i++
  //   } else {
  //     i++
  //   }
  // }
}






$(document).ready(function(event) {
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    numberRange(numberInput);

  });
});
