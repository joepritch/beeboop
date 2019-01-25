function numberRange(numberInput) {
  var range = [];
  for (var i = numberInput; i >= 0; i--) {
    range.push(i);
  }
  console.log(range)
  rangeTranslator(range)
}

function rangeTranslator(range) {
  var modifierNumbers = [3,2,1]
  for (var i = 0; i < range.length;) {
    if (modifierNumbers[0] == (range[i])) {
      alert("the index of the three is " + [i])
      i++
    } else {
      i++
    }
  }
}






$(document).ready(function(event) {
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    numberRange(numberInput);

  });
});
