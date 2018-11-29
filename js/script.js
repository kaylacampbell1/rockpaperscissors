// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;
var userWins = 0;
var computerWins = 0;



$("#shoot").click(function(){
    
    randomNumber = Math.floor(Math.random()*3) +1;
    if(randomNumber===1){
        computerChoice = "rock";
    }
    if(randomNumber===2){
        computerChoice = "paper";
    }
    if(randomNumber===3){
        computerChoice = "scissor";
    }
    userChoice = $("#input").val().toLowerCase();
    
    if (userChoice===computerChoice){
    $("#result").html("TIE!");
    }
    else if ((userChoice==="rock" && computerChoice==="scissor")||(userChoice==="paper"&&computerChoice==="rock")||(userChoice==="scissor"&&computerChoice==="paper")){
    $("#result").html("You Win!");
    userWins = userWins+1
    }
    else if ((computerChoice==="rock" && userChoice==="scissor")||(computerChoice==="paper"&&userChoice==="rock")||(computerChoice==="scissor"&&userChoice==="paper")){
    $("#result").html("Computer Win!");
    computerWins = computerWins+1
    }
    else{
        $("#result").html("Your input is not valid. Please enter: 'rock', 'paper' or 'scissor'");
    }
   $("#userChoice").html(userChoice);
   $("#computerChoice").html(computerChoice);
   $("#userWins").html(userWins);
   $("#computerWins").html(computerWins);
});


