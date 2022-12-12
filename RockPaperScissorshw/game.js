const userText = document.querySelector("#userText");
const computerText = document.querySelector("#computerText");
const outcomeText = document.querySelector("#outcomeText");
const selectionBtn = document.querySelectorAll(".selectionBtn");

let user;
let computer;
let outcome;

const play = () => {
    let userScore = 0
    let computerScore = 0
}

var rps = ["Rock", "Paper", "Scissors"];
var random = Math.floor(Math.random() * 3)

function random (user, computer) {
    if (user===computer){
        console.log ("Tie !")
    } else if (user==="Rock"&&computer==="Scissors"||user==="Paper"&&computer==="Rock"||user==="Scissors"&&computer==="Paper") {
        console.log ("YOU WIN!");
    } else {
        console.log ("You lost :c") }
};