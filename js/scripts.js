//Business Logic
function translateBinary(userInput) {
  var powersArray = [];
  for (index = 1; index < userInput; index = (index * 2)) {
    powersArray.push(index)
  }
  powersArray = powersArray.reverse();
  console.log(powersArray);
  outputArray = [];
  powersArray.forEach(function(value){
    if ((userInput - value) >= 0) {
      outputArray.push(1)
      userInput = userInput - value
    } else {
      outputArray.push(0)
    }
    return outputArray
  });

};

//User logic
$(document).ready(function() {
  $("#translateBtn").click(function(e) {
    e.preventDefault();
    var inputNum = parseInt($("#userInput").val());
    translateBinary(inputNum);
    $("#results").text(outputArray.join(""))
  });

});
