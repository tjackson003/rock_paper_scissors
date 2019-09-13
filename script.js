    // VARIABLES
    
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    // let message = "";
    let resultMessage = document.querySelector('#resultMessage');
    var rockBtn = document.querySelector('#rock');
    var paperBtn = document.querySelector('#paper');
    var scissorsBtn = document.querySelector('#scissors');
    var userScore = document.getElementById('userScore');
    var compScore = document.getElementById('compScore');

// FUNCTIONS

function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
};

function win() {
    playerScore++;
    userScore.innerHTML = playerScore;
}

function lose() {
    computerScore++;
    compScore.innerHTML = computerScore;
}

function tie() {
    tieScore++;
    console.log(tieScore);
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection + computerSelection) {
        case "rockrock":
            tie();
            return resultMessage.innerHTML = "Hey, it's a draw! Play again!";
            break;
        case "rockpaper":
            lose();
            return resultMessage.innerHTML = "Sorry! Paper beat rock, you lose!";
            break;
        case "rockscissors":
            win();
            return resultMessage.innerHTML = "Rock crushes scissors! YOU WIN!";   
            break;
        case "paperpaper":
            tie();
            return resultMessage.innerHTML = "Hey, it's a draw! Play again!";
            break;
        case "paperscissors":
            lose();
            return resultMessage.innerHTML = "Woah! Scissors cut paper, you lose!";
            break;
        case "paperrock":
            win();
            return resultMessage.innerHTML = "Oh my goodness. Paper covers rock...YOU WIN!";
            break;
        case "scissorsscissors":
            tie();
            return resultMessage.innerHTML = "Hey, it's a draw! Play again!";
            break;
        case "scissorsrock":
            lose();
            return resultMessage.innerHTML = "Scissors stand no chance against the mighty rock! You lose!";
            break;
        case "scissorspaper":
            win();
            return resultMessage.innerHTML = "Scissors absolutely decapitate paper! YOU WIN!";
            break;
        default:
            return resultMessage.innerHTML = "Something went wrong.";
            // console.log("Something went wrong.");
    }

}

// EVENT LISTENERS

function main() {
    rockBtn.addEventListener('click', () => {
        // console.log(playRound('rock', computerPlay()));
        playRound('rock', computerPlay());
        endGame();
    });

    paperBtn.addEventListener('click', () => {
        // console.log(playRound('paper', computerPlay()));
        playRound('paper', computerPlay());
        endGame();
    });

    scissorsBtn.addEventListener('click', () => {
        // console.log(playRound('scissors', computerPlay()));
        playRound('scissors', computerPlay());
        endGame();
    });
};

main();

function reset() {
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;

    userScore.innerHTML = playerScore;
    compScore.innerHTML = computerScore;
};

function endGame() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            reset();
            return resultMessage.innerHTML = "You have defeated the almighty CPU in a best to 5 contest! Congrats!!!";
        } else {
            reset();
            return resultMessage.innerHTML = "You have BEEN defeated by the almighty CPU overload. Better luck next time.";
        };
    };
};

