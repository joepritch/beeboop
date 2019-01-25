$(document).ready(function(event) {
  $("form#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    alert(numberInput);
  });
});
