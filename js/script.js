// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
//document.ready(function(){
var answer1, answer2, answer3, answer4;

var answer1= $("#number1").val(Math.floor(Math.random()*10));
var answer2= $("#number2").val(Math.floor(Math.random()*10));
var answer3= $("#number3").val(Math.floor(Math.random()*10));
var num4= $("#number4").val(Math.floor(Math.random()*10));
console.log(num1);


$("#verify").click(function(){
    
    $("#userChoice").append($("#number1").val());
    $("#userChoice").append($("#number2").val());
    $("#userChoice").append($("#number3").val());
    $("#userChoice").append($("#number4").val());

    
});

