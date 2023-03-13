let cells = document.getElementsByTagName("td");
let currentPlayer = "X";
let currentPlayerElement = document.getElementById("current-player");
let winnerElement = document.getElementById("winner");
let restartButton = document.getElementById("restart-button");


// is an array of arrays representing all possible winning combinations in the game.
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to check if a player has won
function checkForWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        let combo = winningCombinations[i];
        if (cells[combo[0]].textContent === currentPlayer &&
            cells[combo[1]].textContent === currentPlayer &&
            cells[combo[2]].textContent === currentPlayer) {
            return true;
        }
    }
    return false;
}

// Function to switch to the other player
function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    currentPlayerElement.textContent = currentPlayer;
}
// Event listener for clicking on a cell
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        if (this.textContent === "" && !winnerElement.textContent) {
            this.textContent = currentPlayer;
            if (checkForWinner()) {
                winnerElement.textContent = currentPlayer + " wins!";
            } else if (Array.from(cells).every(cell => cell.textContent !== "")) {
                winnerElement.textContent = "It's a tie!";
            } else {
                switchPlayer();
            }
        }
    });
}

// Event listener for clicking the restart button
restartButton.addEventListener("click", function() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
    winnerElement.textContent = "";
    currentPlayer = "X";
    currentPlayerElement.textContent = currentPlayer;
});
