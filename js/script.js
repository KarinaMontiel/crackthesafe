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
    
Console.log(randomNumber1, randomNumber2, randomNumber3, randomNumber4);


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
    
    if ( randomNumber1=== numberGuess1 && randomNumber2 === numberGuess2 &&randomNumber3=== numberGuess3 &&randomNumber4===numberGuess4){
        
        alert("YAY you guessed All the Numbers Correct ")
    }
    
    
    if ( randomNumber1===numberGuess1){
        alert("You guessed the correct number and position");
        numbersInPlace +1
    }
    else( randomNumber2===numberGuess1 || randomNumber3 === numberGuess1|| randomNumber4===numberGuess1){
        alert("You guessed the correct number but the wrong position.");
    }
    
    
     if ( randomNumber2===numberGuess2){
        alert("You guessed the correct number and position");
        numbersInPlace +1
        

    }
    else( randomNumber1===numberGuess2 || randomNumber3 === numberGuess2|| randomNumber4===numberGuess2){
        alert("You guessed the correct number but the wrong position.");
    }

    if ( randomNumber3===numberGuess3){
        alert("You guessed the correct number and position");
        numbersInPlace +1
        numbersCorrect +1

    }
    else( randomNumber1===numberGuess3 || randomNumber2 === numberGuess3|| randomNumber4===numberGuess3){
        alert("You guessed the correct number but the wrong position.");
        numbersCorrect +1
        

    }
    
     if ( randomNumber4===numberGuess4){
        alert("You guessed the correct number and position");
        numbersInPlace +1

    }
    else( randomNumber1===numberGuess4 || randomNumber3 === numberGuess4|| randomNumber2===numberGuess4){
        alert("You guessed the correct number but the wrong position.");
    }
});

