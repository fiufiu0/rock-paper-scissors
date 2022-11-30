const buttons = document.querySelectorAll('button');
const player = document.querySelector('#player');
const comp = document.querySelector('#computer');
const result = document.querySelector('#result');

let computerPoints = 0;
let playerPoints = 0;


function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}



function playRound(playerSelection, computerSelection){
    
    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')){
        playerPoints++;
        player.textContent = `${playerPoints}`
        result.textContent = 'point for the player';
    }else if(playerSelection == computerSelection){
        result.textContent = 'Tie!';
    } else {
        computerPoints++;
        comp.textContent = `${computerPoints}`
        result.textContent = 'Point for the computer';
    }

    checkWinner();
    
}

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        
        let playerSelection = '';
        if(button.id == 1){
            playerSelection = 'rock';
        } else if(button.id == 2){
            playerSelection = 'paper'
        } else if(button.id == 3){
            playerSelection = 'scissors'
        }
        playRound(playerSelection, getComputerChoice())
    
    })
})




function checkWinner(){
    
    if(playerPoints === 5) {
        result.textContent = `Player won the game! ${playerPoints} vs ${computerPoints}`;
        result.style.color = "green"
        player.textContent = 0;
        comp.textContent = 0;
        playerPoints = 0;
        computerPoints = 0;

    } else if(computerPoints === 5) {
        result.textContent = `Computer won the game! ${computerPoints} vs ${playerPoints}`;
        result.style.color = "green"
        comp.textContent = 0;
        player.textContent = 0
        computerPoints = 0;
        playerPoints = 0;
        
    }

}

