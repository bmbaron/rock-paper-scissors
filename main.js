
//Run the main game automatically when the file is loaded
game();


//This main game function includes the function to play a round of Rock Scissors Paper called playRound. This function is called 5 times, and a winner is found by comparing the values of the global variables computerPoints and userPoints to see who won more rounds.
function game(){
  
  //initialize the player points to 0
  let computerPoints = 0;
  let userPoints = 0;
  
  //play the game 5 times
  let i = 0;
  for (i=0; i<5; i++) {
    
    //call the playRound function
    playRound();   
  }
    
  //after 5 rounds, compare the points of both players to find a winner and display total points for each player
  if (computerPoints > userPoints) {
    console.log("computer wins. " + "computer: " + computerPoints + " user: " + userPoints);
  }
  else if (computerPoints < userPoints) {
    console.log("user wins. " + "computer: " + computerPoints + " user: " + userPoints);
  }
  else {
    console.log("it's a tie! " + "computer: " + computerPoints + " user: " + userPoints);
  }
  
  //The main function in which the gameplay is designed
  function playRound () {
    
    //A string array to hold the possible choices that players can choose each round
    let rsp= ["rock", "scissors", "paper"];
    
    //initialize the variables to hold the player choices as strings
    let computerChoice = "";
    let userChoice = "";
    
    //call the computerPlay and userPlay functions to allow both players to choose an option
    computerPlay();
    userPlay();
    //when both players have a choice, compare them with comparePlay
    comparePlay()
    
    //This function chooses a random string from the rsp string array for the computer to play with
    function computerPlay () {
      let randomPlace = Math.floor(Math.random()*rsp.length);
      computerChoice = rsp[randomPlace];
    }  
    
    //This function prompts the user to enter rock, scissors, or paper. Note that case doesn't matter because their answer will be converted into a string with lower case characters
    function userPlay () {      
      rawUserChoice = prompt("Enter rock, paper, or scissors");
      userChoice = rawUserChoice.toLowerCase();
    }

    //After the computer and user have both chosen a play, their choices are compared to find a winner for the round. The global variables userPoints and computerPoints are incremented respectively
    function comparePlay () {

      //The details of the tie don't matter, because if both players choose the same thing, we don't want to change either players' points
      if (computerChoice == userChoice) {
        console.log("tie round! comp:" + computerChoice+ " user:" + userChoice);
      }
      //If a tie didn't happen, compare all the cases where it's possible for the computer to win and increment the points if one of them is true
      else if ((computerChoice == "rock" && userChoice == "scissors") || (computerChoice == "scissors" && userChoice == "paper") || (computerChoice == "paper" && userChoice == "rock")) {
	    computerPoints++;
	    console.log("comp:" + computerChoice + " user:" + userChoice);
      }
      //Compare all the cases where it's possible for the user to win and increment the points if one of them is true
      else {
	    userPoints++;
	    console.log("user:" + userChoice + " comp:" + computerChoice);
      }


    }
    
  } 
  
}