const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start The Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  // Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    // Computer Options

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        setTimeout(() => {
          comparHands(this.textContent, computerChoice);

          // Update Images
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;

          /*playerHand.style.animation = "shakePlayers 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";*/
        }, 2000);

        playerHand.style.animation = "shakePlayers 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  /* comparHands */
  const winner = document.querySelector(".winner");
  const comparHands = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      winner.textContent = "It s a tie";
      return;
    }

    // check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "player wins";
        pScore++;
        updateScore();
        return;
      }
    } else {
      winner.textContent = "computer wins";
      cScore++;
      updateScore();
      return;
    }

    // check for the paper

    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "computer wins";
        cScore++;
        updateScore();
        return;
      }
    } else {
      winner.textContent = "player wins";
      pScore++;
      updateScore();
      return;
    }

    // check for the scissors

    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "computer wins";
        cScore++;
        updateScore();

        return;
      }
    } else {
      winner.textContent = "player wins";
      pScore++;
      updateScore();

      return;
    }
  };

  // Call To all inner Functions
  startGame();
  playMatch();
};

// Start The Function
game();
