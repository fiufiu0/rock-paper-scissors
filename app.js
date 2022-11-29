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
    }else if(playerSelection == computerSelection){
        console.log("Tie!")
    } else {
        computerPoints++;
        comp.textContent = `${computerPoints}`
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
    
    
}

