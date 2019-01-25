function numberRange(numberInput) {
  var range = [];
  for (var i = numberInput; i >= 0; i--) {
    range.push(i);
  }
  console.log(range)
  rangeTranslator(range)
}

function rangeTranslator(range) {
  // var translatedString = rangeString.replace(/3/g, "sorry");
  // console.log(translatedString)
  var comma = [","]
  var modifierNumbers = ["3"]
  var rangeString = range.toString();
  for (var i = 0; i < rangeString.length;) {
    if (modifierNumbers.includes(rangeString[i])) {
      alert([i])
      for (var j = 1; j < rangeString.length;) {
        if (comma.includes(rangeString[i + j])) {
          alert([i + j])
          console.log(rangeString);
          return
        } else {
          j++
        }
        // if (comma.includes(rangeString[i - 1])) {
        //   alert("found second comma")
        //   rangeString = rangeString.replace(rangeString[i], "sorry");
        // }
      }
      i++
    } else {
      i++
    }
  }
  console.log(rangeString);
}






$(document).ready(function(event) {
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    numberRange(numberInput);

  });
});
