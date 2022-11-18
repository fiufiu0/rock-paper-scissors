
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let random = choice[Math.floor(Math.random() * choice.length)];
    console.log(`Computer: ${random}`);
    return random;
}

// getComputerChoice();

function playRound(playerSelection, computerSelection){
    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')){
        console.log(`Player win! ${playerSelection} vs ${computerSelection}` )
    }else if(playerSelection == computerSelection){
        console.log("TIE")
    } else {
        console.log(`Computer win! ${computerSelection} vs ${playerSelection}`)
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);