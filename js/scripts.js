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
      alert([i]);
      for (var j = 1; j < rangeString.length;) {
        if (comma.includes(rangeString[i + j])) {
          alert([i + j]);
          endSlice = rangeString.slice((i + j), -1);
          console.log(endSlice);
          for (var k = 1; k < rangeString.length;) {
            if (comma.includes(rangeString[i - k])) {
              alert([i - k]);
              frontSlice = rangeString.slice(0, (i - k) + 1);
              console.log(rangeString);
              console.log(frontSlice);
              rangeString = (frontSlice + "sorry" + endSlice);
              console.log(rangeString);
              return
            } else {
              k++
            }
          }
          return
        } else {
          j++
        }
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

    // $(".result").text(rangeTranslator());
  });
});
