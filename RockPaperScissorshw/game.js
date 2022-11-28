const play = () => {
    let userScore = 0
    let computerScore = 0
}

var rps = ["Rock", "Paper", "Scissors"];
var random = 

function random (user, computer) {
    if (user===computer){
        console.log ("Tie !")
    } else if (user==="Rock"&&computer==="Scissors"||user==="Paper"&&computer==="Rock"||user==="Scissors"&&computer==="Paper")) {
        console.log ("YOU WIN!");
    } else {
        console.log ("You lost :c")
};