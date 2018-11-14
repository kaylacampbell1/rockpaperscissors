// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice =- "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;


$("#shoot").click(function(){
    var us = $("#input").val();
   $("#userChoice").text(us);
   randomNumber = Math.random();
});


