
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

    let computerPoints = 0;
    let playerPoints = 0;

function playRound(playerSelection, computerSelection){
    
    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')){
        console.log(`Player win! ${playerSelection} vs ${computerSelection}` )
        playerPoints++;
        console.log(`Points | Player ${playerPoints} vs Computer ${computerPoints}`)
    }else if(playerSelection == computerSelection){
        console.log("Tie!")
        console.log(`Points | Player ${playerPoints} vs Computer ${computerPoints}`)
    } else {
        console.log(`Computer win! ${computerSelection} vs ${playerSelection}`)
        computerPoints++;
        console.log(`Points | Player ${playerPoints} vs Computer ${computerPoints}`)
    }
}


function game(){
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper, scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        
     }

     if(playerPoints > computerPoints) {
        console.log("Player won the game!")
    } else if(computerPoints > playerPoints) {
        console.log("Computer won the game!")
    } else {
        console.log("Draw! Play again!")
    }
}

game();