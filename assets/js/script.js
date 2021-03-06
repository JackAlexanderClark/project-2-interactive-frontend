/*
*	Need to add tab indentation universally
*/

// script start, test DOM and jQuery are working
$(document).ready(function () {
  $(".title").fadeIn("slow");
  console.log("Document fully loaded - jQuery is ready");

  
  let element = document.getElementsByClassName("profile");

  // element.addEventListener("click", showModal);
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("click", showModal);
  }
});

function showModal() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];


  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};

// jQuery crime description panel drop down
$("#flip").click(function() {
  $("#panel").slideDown("slow").click(function () {
    $(this).slideUp("slow");
  });
});

// click for witness statement functions
function witnessStatement1() {
  document.getElementById('witness1').innerHTML = "At approximately 1:00am I was awoken by the screeching of tires...";
};

function witnessStatement2() {
  document.getElementById('witness2').innerHTML = "There were two men loitering outside the street, they looked suspicous...";
};

function witnessStatement3() {
  document.getElementById('witness3').innerHTML = "Lorulpa qui officia deserunt mollit anim id est laborum."
};

function witnessStatement4() {
  document.getElementById('witness4').innerHTML = "Elit, sedtat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

// click for fingerprint information
function fingerprintInfo() {
	document.getElementById('fingerprintId').innerHTML = "Our scientific investigations have concluded that the fingerprint has a 2/3 chance of being female. Meaning the suspect is more likely to be female rather than male - however that does not imply that the suspect is definitely female, it could be a male just less likely."
};

// acordian 
$(function() {
	$("#accordion").accordion();
});

// button changes on mouse hover event
$(".button").mouseover(function (e) {
	$(this).removeClass().addClass("buttonOver");
	}).mouseout(function() {
		$(this).removeClass().addClass("button");
	});
	console.log("mouse over event working");


/*
*$(window).load(function (){
*$(".question-fade-in").fadeIn("slow", "linear").fadeOut("slow")
*});


/*
*	The vicar is the correct suspect == suspect 7
*	1 or 2 guesses permitted per round 
*	Need to build a timer
*/
/*
let attempts = 0;
let playerInput = input();
document.getElementById("guessChoice").onclick = checkGuess();

function checkGuess() {
    let playerGuess = guess.value;
    if (attempts === 2) {
      feedback.textContent = "Failed. You have used all 3 guesses! You chose '{playerInput}'.";
      console.log("Testing - game failed");
      return; 
    }
    if (playerGuess === suspect8) {
      attempts = 0;
      feedback.textContent = "You got it right! Suspect 8 was the criminal who killed your family!";
      console.log("CORRECT ANSWER");
    } else if (myGuess != correctSuspect) {
      attempts += 1;
      feedback.textContent = "Your guess was" + playerGuess + ". That's incorrect, you selected an inoccent man. Try Again!"
      console.log("INCORRECT ANSWER");
  };
  
  //Resets the game attempts to 3
  function restartGame() {
    attempts = 3;
    gameAttempts.innerHTML = '3';
    feedback.textContent = "Game reset you have 3 more guesses to identify the suspect";
  };

// jQuery popup text function
// fadeIn method takes in 3 paramereters; speed, easing and callback.
// callback function after
*/


// Taking json data through XML httprequest pull from suspects.json
/*
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myArr = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myArr[0];
  }
}
xmlhttp.open("GET", "json_demo_array.txt", true);
xmlhttp.send();
*/

