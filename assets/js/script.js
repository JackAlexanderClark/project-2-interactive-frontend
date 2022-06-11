$(document).ready(function(){
    console.log("Document fully loaded - jQuery is ready");
  });
  

  const correctSuspect = suspect1;
  let attempts = 0;
  // One guess gameloop
  document.getElementById("guessChoice").onclick = checkGuess();
  
  //Primary checking 
  function checkGuess() {
    let playerGuess = guess.value;
    if (attempts === 3) {
      feedback.textContent = "Game over! Failed. You have used all 3 guesses!";
      console.log("GAME FAILED 3 GUESSES USED");
      //Need to restart the game using the restartGame() function
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