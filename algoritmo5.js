// Rock Paper Scissors!

function playGame(player1, player2) {
  if (player1 === player2) {
    return "Draw!";
  } else if ((player1 === "scissors" && player2 === "paper") ||
             (player1 === "paper" && player2 === "rock") ||
             (player1 === "rock" && player2 === "scissors")) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

console.log(playGame("scissors", "paper")); // "Player 1 won!"
console.log(playGame("scissors", "rock")); // "Player 2 won!"
console.log(playGame("paper", "paper")); // "Draw!"
