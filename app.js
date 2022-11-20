
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}


function playRound(playerSelection, computerSelection){
    
    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')){
        console.log(`Player win! ${playerSelection} vs ${computerSelection}` )
    }else if(playerSelection == computerSelection){
        console.log("Tie!")
    } else {
        console.log(`Computer win! ${computerSelection} vs ${playerSelection}`)
    }
}


function game(){
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper, scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        
     }

    
}

game();