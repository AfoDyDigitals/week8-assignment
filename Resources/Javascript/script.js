const prompt = require("prompt-sync")(); 
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let choice= Math.floor(Math.random()*choices.length);
    console.log("Computer picked" + " " + choices[choice]);
    return choices[choice];
};

getComputerChoice();