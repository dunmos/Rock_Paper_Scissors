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


function getHumanChoice() {

    const humanChoice = prompt(
        "Choose rock, paper, or scissors"
    );

    return humanChoice;
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();


        if (humanChoice === computerChoice) {

            console.log("It's a draw!");

        }


        else if (
            (humanChoice === "rock" &&
                computerChoice === "scissors") ||

            (humanChoice === "paper" &&
                computerChoice === "rock") ||

            (humanChoice === "scissors" &&
                computerChoice === "paper")
        ) {

            console.log(
                `You win! ${humanChoice} beats ${computerChoice}`
            );

            humanScore++;

        }


        else {

            console.log(
                `You lose! ${computerChoice} beats ${humanChoice}`
            );

            computerScore++;

        }
    }

/* without using loops
    // Round 1
    playRound(getHumanChoice(), getComputerChoice());

    // Round 2
    playRound(getHumanChoice(), getComputerChoice());

    // Round 3
    playRound(getHumanChoice(), getComputerChoice());

    // Round 4
    playRound(getHumanChoice(), getComputerChoice());

    // Round 5
    playRound(getHumanChoice(), getComputerChoice());

*/
// Play 5 rounds using a loop
    for (let i = 0; i < 5; i++) {

        console.log(`Round ${i + 1}`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
    
    // Display final scores
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);


    // Declare the final winner
    if (humanScore > computerScore) {

        console.log("You are the winner!");

    }
    else if (computerScore > humanScore) {

        console.log("Computer is the winner!");

    }
    else {

        console.log("The game is a draw!");

    }
}

playGame();