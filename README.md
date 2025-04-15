# Tic Tac Toe Web App

This is a classic Tic Tac Toe game implemented as a web application using HTML, CSS, and JavaScript. It features a
simple, clean interface and single-player functionality against a basic AI opponent.

## Features

* **Classic Tic Tac Toe Gameplay:** Players take turns marking spaces in a 3×3 grid.
* **Single-Player Mode:** Play against a simple AI opponent.
* **Win/Tie Detection:** The game automatically detects win conditions (horizontal, vertical, and diagonal) and ties.
* **Game Over Display:** Displays a message declaring the winner or a tie.
* **Restart Functionality:** A "Restart" button allows players to easily start a new game.
* **Responsive Design Considerations:** Basic styling is included to ensure the game is playable on various screen
  sizes, although further responsiveness improvements are welcome.

## Demo

You can try out the live demo of the game here: [Tic Tac Toe Web App](https://faizanahmed0107.github.io/TicTacToe/)

## Getting Started

### Prerequisites

* A web browser that supports HTML, CSS, and JavaScript (most modern browsers are compatible).

### How to Play

1. Clone the repository:
   ```bash
   git clone https://github.com/MrUnknown101331/TicTacToe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TicTacToe
   ```
3. Open `index.html` in your web browser.
4. Click on an empty square to place your "X".
5. The AI will then make its move as "O".
6. Continue taking turns until a player wins or the game ends in a tie.
7. Click the "Restart" button to begin a new game.

## Code Structure

* `index.html`: Contains the HTML structure for the game board, including buttons for each square, text elements for
  displaying messages, and the restart button.
* `css/style.css`: Styles the game board, buttons, text, and overall layout. Includes some basic styling for
  responsiveness.
* `js/script.js`: Implements the game logic, including handling player turns, AI moves, win/tie checking, and updating
  the UI.

## Game Logic (script.js)

* The game board is represented by a 2D array (`playBox`).
* The AI uses a simple algorithm:

1. Check if it can win in the next move.
2. Check if the player can win in the next move and block them.
3. If neither of the above is true, choose a random available square.

* Win conditions are checked after each turn.

## Future Enhancements

* **Multiplayer Mode:** Implement a two-player mode for human vs. human play.
* **Improved AI:** Enhance the AI's strategy for a more challenging opponent.
* **Enhanced UI/UX:** Improve the visual design, add animations, sound effects, and improve responsiveness for various
  screen sizes and devices.
* **Game State Persistence:** Implement a way to save and load game progress (e.g., using local storage).
* **Configurable Game Modes:** Allow users to choose between single-player and multiplayer modes.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your commit message"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.
