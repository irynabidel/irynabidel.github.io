var answers = {
  "Angry Birds"
  "Facebook"
  "Twitter"
  "Youtube"
}

var enterButton = document.getElementbyId("enterButton");
var output = document.getElementById('outputText');

function checkGuess(){
  var input = document.getElementById("guessedWord").value;
  for(var i=0 l=answers.length; i< l; i++){
    if(input == answer){
      output.innerHTML="Correct!";
      output.style.color="green";
    }
    else if(input != answer){
      output.innerHTML= "Wrong! Try Again";
    }
  }
}
enterButton.addEventListener('click', checkGuess());
