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
        computerChoice = "scissors";
    }
    userChoice = $("#input").val().toLowerCase();
    
    if (userChoice===computerChoice){
        $("#result").html("TIE!");
    }
    else if ((userChoice==="rock" && computerChoice==="scissors")||(userChoice==="paper"&&computerChoice==="rock")||(userChoice==="scissors"&&computerChoice==="paper")){
        winner = "You Win!"
        $("#result").html(winner);
    userWins = userWins+1;
    }
    else if ((computerChoice==="rock" && userChoice==="scissors")||(computerChoice==="paper"&&userChoice==="rock")||(computerChoice==="scissors"&&userChoice==="paper")){
        winner = "Computer Win!"
        $("#result").html(winner);
    computerWins = computerWins+1;
    }
    else if (userChoice==="scissor"){
            $("#result").html("Add a 's' to the end of 'scissor'");
    }
    else{
        $("#result").html("Your input "+userChoice+ " is not valid. Please enter: 'rock', 'paper' or 'scissors'");
    }
   $("#userChoice").html(userChoice);
   $("#computerChoice").html(computerChoice);
   $("#userWins").html(userWins);
   $("#computerWins").html(computerWins);
   while(userWins>computerWins){
       $("#userWins").css("color", "blue")
       $("#uw").css("color", "blue")
   }
   while(computerWins>userWins){
       $("#computerWins").css("color", "blue")
       $("#cw").css("color", "blue")
   }
});


