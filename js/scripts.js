function numberConvertor(numberInput) {
  var range = [];
  for (var i = numberInput; i >= 0; i--) {
    range.push(i);
  }
  threeFinder(range.toString());
}

function threeFinder(range) {
  alert("at three finder")
  var source = "3";
  for (var i = 0; i <= range.length;) {
    if (source.includes(range[i])) {
      rangeSlicer(range, i, source)
      return
    } else if (i < range.length) {
      i++
    } else if (i = range.length) {
      console.log(range)
      twoFinder(range)
      return
    }
  }
}

function twoFinder(range) {
  alert("made it to two finder");
  var source = "2";
  for (var i = 0; i <= range.length;) {
    if (source.includes(range[i])) {
      rangeSlicer(range, i, source);
      return;
    } else if (i < range.length) {
      i++
    } else if (i = range.length) {
      console.log(range);
      oneFinder(range);
      return;
    }
  }
}

function oneFinder(range) {
  alert("made it to one finder");
  var source = "1";
  alert(range)
  for (var i = 0; i <= range.length;) {
    if (source.includes(range[i])) {
      rangeSlicer(range, i, source);
      return;
    } else if (i < range.length) {
      i++
    } else if (i = range.length) {
      console.log(range);
      alert(range);
      result(range);
      return;
    }
  }
}

function  rangeSlicer(range, index, source) {
  alert("made it to slicer")
  console.log(range);
  console.log(index);
  console.log(source);
  var frontSlice = ""
  var endSlice = ""
  var returnRange = ""
  var message1 = "Beep!"
  var message2 = "Boop!"
  var message3 = "Sorry!"
  var comma = ","
  if (index == 0) {
    for (var i = 0; i < range.length; i++) {
      if (comma.includes(range[index + i])) {
        endSlice = range.slice((index + i), range.length)
        if (source == 3) {
          returnRange = (message3 + endSlice)
          alert(returnRange);
          alert("sending back to three finder");
          threeFinder(returnRange);
          return;
        } else if (source == 2) {
          returnRange = (message2 + endSlice)
          alert(returnRange);
          alert("sending to three finder");
          threeFinder(returnRange);
          return;
        } else if (source == 1) {
          returnRange = (message1 + endSlice)
          alert(returnRange);
          alert("sending 1 to three finder")
          threeFinder(returnRange);
          return;
        }
      }
    }
  } else {
    for (var i = 0; i < range.length; i++) {
      if (comma.includes(range[index + i])) {
        endSlice = range.slice((index + i), range.length)
        for (var j = 0; j < range.length; j++) {

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
