function numberRange(numberInput) {
  var range = [];
  for (var i = numberInput; i >= 0; i--) {
    range.push(i);
  }
  console.log(range)
  rangeTranslator(range, "")
}

function rangeTranslator(range, rangeTranslated) {
  // var translatedString = rangeString.replace(/3/g, "sorry");
  // console.log(translatedString)
  var comma = [","]
  var modifierNumbers = ["3"]
  var rangeString = range.toString();
  var result = (rangeTranslated + ",2,1,0")
  for (var i = 0; i < rangeString.length;) {
    if (modifierNumbers.includes(rangeString[i])) {
      for (var j = 0; j < rangeString.length;) {
        if (comma.includes(rangeString[i + j])) {
          endSlice = rangeString.slice((i + j), rangeString.length);
          for (var k = 0; k < rangeString.length;) {
            if (comma.includes(rangeString[i - k])) {
              frontSlice = rangeString.slice(0, (i - k) + 1);
              rangeTranslated = (rangeTranslated + frontSlice + "sorry")
              rangeString = endSlice;
              console.log(rangeTranslated + "hi")
              console.log(rangeString + "hey")
              rangeTranslator(rangeString, rangeTranslated);
            } else {
              k++
            }
          }
        } else {
          j++
        }
      }
      i++
    } else {
      i++
    }
  }
  printResults(result);

}

function printResults(result) {
  alert(result)
}





$(document).ready(function(event) {
  $(".container").slideToggle("slow");
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    numberRange(numberInput);

    // $(".result").text(rangeTranslator());
  });
});
