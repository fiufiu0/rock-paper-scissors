console.log("conected");

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let random = choice[Math.floor(Math.random() * choice.length)];
    console.log(`Computer: ${random}`);
    return random;
}

getComputerChoice();

