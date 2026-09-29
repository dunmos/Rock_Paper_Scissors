let humanScore = 0;
let computerScore = 0;

// Get computer's choice
function getComputerChoice() {

    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return "rock";
    }
    else if (randomNumber < 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function playRound(humanChoice, computerChoice) {

    // If game is already over, don't continue
    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    humanChoice = humanChoice.toLowerCase();

    // Draw
    if (humanChoice === computerChoice) {

        results.textContent =
            `It's a draw! You both chose ${humanChoice}.`;

    }

    // Human wins
    else if (
        (humanChoice === "rock" &&
            computerChoice === "scissors") ||

        (humanChoice === "paper" &&
            computerChoice === "rock") ||

        (humanChoice === "scissors" &&
            computerChoice === "paper")
    ) {

        results.textContent =
            `You win! ${humanChoice} beats ${computerChoice}`;

        humanScore++;

    }

    // Computer wins
    else {

        results.textContent =
            `You lose! ${computerChoice} beats ${humanChoice}`;

        computerScore++;

    }


    // Display score
    score.textContent =
        `You: ${humanScore} | Computer: ${computerScore}`;

        // Check if someone has reached 5
    if (humanScore === 5) {
        winner.textContent = "You win the game!";
    } 
    else if (computerScore === 5) {
        winner.textContent = "Computer wins the game!";
    }

}

// Get HTML elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const results = document.getElementById("results");


// Create score and winner elements
const score = document.createElement("p");
const winner = document.createElement("h2");

document.body.appendChild(score);
document.body.appendChild(winner);


// Button event listeners
rockButton.addEventListener("click", function () {
    const computerChoice = getComputerChoice();

    playRound("rock", computerChoice);
});

paperButton.addEventListener("click", function () {
    const computerChoice = getComputerChoice();

    playRound("paper", computerChoice);
});

scissorsButton.addEventListener("click", function () {
    const computerChoice = getComputerChoice();

    playRound("scissors", computerChoice);
});

