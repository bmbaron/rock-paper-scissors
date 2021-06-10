

//Run the main game automatically when the file is loaded
//game();


//This main game function includes the function to play a round of Rock Scissors Paper called playRound. This function is called 5 times, and a winner is found by comparing the values of the global variables computerPoints and userPoints to see who won more rounds.
//function game(){


  //initialize the player points to 0
  let computerPoints = 0;
  let userPoints = 0;
  let gameOver = false;
  
  //play the game 5 times
  //let i = 0;
  //for (i=0; i<2; i++) {
    //call the playRound function
    playRound();
     
  
  //The main function in which the gameplay is designed
  function playRound () {

	const choices = document.getElementsByClassName("image");
	let userClicked = false;
	let userChoice = "";


	for(let i=0; i<choices.length; i++) {
		
		choices[i].addEventListener("click", (e) => {

			if(!userClicked) {
				choices[i].style.outlineWidth = "5px";
				userClicked=true;
				userChoice = choices[i].id;
				userPlay(userChoice);
			}
			});

	}
    
    //A string array to hold the possible choices that players can choose each round
    let rsp= ["rock", "scissors", "paper"];
    
    //initialize the variables to hold the player choices as strings
    let computerChoice = "";

    


   
    
    //This function prompts the user to enter rock, scissors, or paper. Note that case doesn't matter because their answer will be converted into a string with lower case characters
  async function userPlay (userChoice) {
      //rawUserChoice = prompt("Enter rock, paper, or scissors");
      //userChoice = rawUserChoice.toLowerCase();

      var paragraph = document.getElementById("choices");
      var text = document.createTextNode("\n" + "you chose " + userChoice);
      paragraph.appendChild(text);
      
	console.log("The user chose: " + userChoice);

  await new Promise(resolve => setTimeout(resolve, 1500));
  
	computerPlay();
	
  await new Promise(resolve => setTimeout(resolve, 1000));


	comparePlay();
	return;

	    
    }

    //This function chooses a random string from the rsp string array for the computer to play with
   function computerPlay () {
      let randomPlace = Math.floor(Math.random()*rsp.length);
      computerChoice = rsp[randomPlace];
      document.getElementById(computerChoice).style.outlineColor = "red";
      document.getElementById(computerChoice).style.outlineWidth = "5px";
      
      var paragraph = document.getElementById("choices");
      var text = document.createTextNode("\n" + "the computer chose " + computerChoice);
      paragraph.appendChild(text);
      
      return;

    }

    //After the computer and user have both chosen a play, their choices are compared to find a winner for the round. The global variables userPoints and computerPoints are incremented respectively
   async function comparePlay () {
     
      let resultsString = "";
      let textColor = ["red", "blue", "white"];
      let text;

      //The details of the tie don't matter, because if both players choose the same thing, we don't want to change either players' points
      if (computerChoice == userChoice) {
        //console.log("tie round! comp:" + computerChoice+ " user:" + userChoice);
      }
      
      //If a tie didn't happen, compare all the cases where it's possible for the computer to win and increment the points if one of them is true
      else if ((computerChoice == "rock" && userChoice == "scissors") || (computerChoice == "scissors" && userChoice == "paper") || (computerChoice == "paper" && userChoice == "rock")) {
	    computerPoints++;
	    //console.log("comp:" + computerChoice + " user:" + userChoice);
      }
      //Compare all the cases where it's possible for the user to win and increment the points if one of them is true
      else {
	    userPoints++;
	    //console.log("user:" + userChoice + " comp:" + computerChoice);
      }
      
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    
    var paragraph = document.getElementById("results");

    if (computerPoints > userPoints) {
      resultsString = "the computer wins";
      text = document.createTextNode(resultsString);
      paragraph.style.color = "red";

    }
    else if (computerPoints < userPoints) {
      resultsString = "you win!";
      text = document.createTextNode(resultsString);
      paragraph.style.color = "blue";

    }
    else {
      resultsString = "it's a tie";
      text = document.createTextNode(resultsString);
      paragraph.style.color = "white";


    }
    
    paragraph.style.fontSize = "30px";
    paragraph.appendChild(text);
    
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    let button = document.getElementById("button");
    button.style.visibility = "visible";
    button.onclick = function(){
      
    window.location.reload(true)
    
      
    };
    

    }
    

    
  }




