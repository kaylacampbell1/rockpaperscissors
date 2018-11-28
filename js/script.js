// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice =$("#input").val();
var computerChoice = "";
var winner = "";
var randomNumber = Math.random();

if(randomNumber===1){
    computerChoice = "rock"
}
if(randomNumber===2){
    computerChoice = "paper"
}
if(randomNumber===3){
    computerChoice = "scissor"
}

$("#shoot").click(function(){
    if (userChoice===computerChoice){
    $("#result").html("TIE!");
    }
    if ((userChoice==="rock" && computerChoice==="scissor")||(userChoice==="paper"&&computerChoice==="rock")||(userChoice==="scissor"&&computerChoice==="paper")){
    $("#result").html("You Win!");
    }
    if ((computerChoice==="rock" && userChoice==="scissor")||(computerChoice==="paper"&&userChoice==="rock")||(computerChoice==="scissor"&&userChoice==="paper")){
    $("#result").html("Computer Win!");
    }
   $("#userChoice").html(userChoice);
   $("#computerChoice").html(computerChoice);
   
});


