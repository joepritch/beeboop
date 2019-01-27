function numberConvertor(numberInput) {
  var range = [];
  for (var i = numberInput; i >= 0; i--) {
    range.push(i);
  }
  threeFinder(range.toString());
}

function threeFinder(range) {
  var source = "3";
  for (var i = 0; i <= range.length;) {
    if (source.includes(range[i])) {
      rangeSlicer(range, i, source)
      return
    } else if (i < range.length) {
      i++
    } else if (i = range.length) {
      twoFinder(range)
      return
    }
  }
}

function twoFinder(range) {
  var source = "2";
  for (var i = 0; i <= range.length;) {
    if (source.includes(range[i])) {
      rangeSlicer(range, i, source);
      return;
    } else if (i < range.length) {
      i++
    } else if (i = range.length) {
      oneFinder(range);
      return;
    }
  }
}

function oneFinder(range) {
  var source = "1";
  for (var i = 0; i <= range.length;) {
    if (source.includes(range[i])) {
      rangeSlicer(range, i, source);
      return;
    } else if (i < range.length) {
      i++
    } else if (i = range.length) {
      result(range);
      return;
    }
  }
}

function  rangeSlicer(range, index, source) {
  var frontSlice = ""
  var endSlice = ""
  var returnRange = ""
  var message1 = " Beep!"
  var message2 = " Boop!"
  var message3 = " Sorry!"
  var comma = ","
  if (index == 0) {
    for (var i = 0; i < range.length; i++) {
      if (comma.includes(range[index + i])) {
        endSlice = range.slice((index + i), range.length);
        if (source == 3) {
          returnRange = (message3 + endSlice);
          threeFinder(returnRange);
          return;
        } else if (source == 2) {
          returnRange = (message2 + endSlice);
          threeFinder(returnRange);
          return;
        } else if (source == 1) {
          returnRange = (message1 + endSlice);
          threeFinder(returnRange);
          return;
        }
      }
    }
  } else {
    for (var i = 0; i < range.length; i++) {
      if (comma.includes(range[index + i])) {
        endSlice = range.slice((index + i), range.length);
        for (var j = 0; j < range.length; j++) {
          if (comma.includes(range[index - j])) {
            frontSlice = range.slice(0, (index - j) + 1);
            if (source == 3) {
              returnRange = (frontSlice + message3 + endSlice);
              threeFinder(returnRange);
              return;
            } else if (source == 2) {
              returnRange = (frontSlice + message2 + endSlice);
              threeFinder(returnRange);
              return;
            } else if (source = 1) {
              returnRange = (frontSlice + message1 + endSlice);
              threeFinder(returnRange);
              return;
            }
          }
        }
      }
    }
  }
}

function result(range) {
  $("#result").text(range);
}


// function rangeTranslator(range, rangeTranslated) {
//   // var translatedString = rangeString.replace(/3/g, "sorry");
//   // console.log(translatedString)
//   var comma = [","]
//   var modifierNumbers = ["3"]
//   var rangeString = range.toString();
//   var result = (rangeTranslated + ",2,1,0")
//   for (var i = 0; i < rangeString.length;) {
//     if (modifierNumbers.includes(rangeString[i])) {
//       for (var j = 0; j < rangeString.length;) {
//         if (comma.includes(rangeString[i + j])) {
//           endSlice = rangeString.slice((i + j), rangeString.length);
//           for (var k = 0; k < rangeString.length;) {
//             if (comma.includes(rangeString[i - k])) {
//               frontSlice = rangeString.slice(0, (i - k) + 1);
//               rangeTranslated = (rangeTranslated + frontSlice + "sorry")
//               rangeString = endSlice;
//               console.log(rangeTranslated + "hi")
//               console.log(rangeString + "hey")
//               rangeTranslator(rangeString, rangeTranslated);
//             } else {
//               k++
//             }
//           }
//         } else {
//           j++
//         }
//       }
//       i++
//     } else {
//       i++
//     }
//   }
//   printResults(result);
//
// }
//
// function printResults(result) {
//   alert(result)
// }





$(document).ready(function(event) {
  $(".container").slideToggle("slow");
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    numberConvertor(numberInput);

    var result = function result(range) {
      $("#result").text(range);
    }
  });
});
