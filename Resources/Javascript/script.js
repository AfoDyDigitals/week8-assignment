const prompt = require("prompt-sync")(); 
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let choice= Math.floor(Math.random()*choices.length);
    console.log("Computer picked" + " " + choices[choice]);
    return choices[choice];
};
// getComputerChoice();

function getUserChoice(){
    let playerInput = prompt(
        "Pick an element among Rock, Paper, and Scissors: "
        ).toLowerCase();
    
    if (playerInput == "rock") {
        console.log("You selected rock");
        return "Rock";
    }   else if (playerInput == "paper") {
        console.log("You selected paper");
        return "Paper";
    }   else if (playerInput == "scissors") {
        console.log("You picked scissors");
        return "scissors";
    } else{
        console.log("Please select either Rock, Paper, or Scissors");
    }
};
// getUserChoice();
