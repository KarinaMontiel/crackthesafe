// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
//document.ready(function(){

let randomNumber1=Math.floor(Math.random())
    randomNumber1=randomNumber1.toString()
let randomNumber2= Math.floor(Math.random())
    randomNumber2=randomNumber2.toString()
let randomNumber3=Math.floor(Math.random())
    randomNumber3=randomNumber3.toString()
let randomNumber4= Math.floor(Math.random())
    randomNumber4=randomNumber4.toString()


let numberGuess1= ""
let numberGuess2 =""
let numberGuess3=""
let numberGuess4=""

let numbersCorrect= 0
let numbersInPlace= 0







$("#verify").click(function(){
    
    $("#userChoice").append($("#number1").val());
    $("#userChoice").append($("#number2").val());
    $("#userChoice").append($("#number3").val());
    $("#userChoice").append($("#number4").val());

    numberGuess1 = $("#number1").val();
    numberGuess2 = $("#number2").val();
    numberGuess3 = $("#number3").val();
    numberGuess4 = $("#number4").val();
    
    if (numberGuess1 === randomNumber1) {
        return("Correct Number and Position");
        
    });

    if (numberGuess2 === randomNumber2) {
        return("Correct Number and Position");

        
    });
    
    if (numberGuess3 === randomNumber3) {
        return("Correct Number and Position");

        
    });
    
    if (numberGuess4 === randomNumber4) {
        
        
    });
    
    

    
    
});

