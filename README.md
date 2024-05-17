### TuroChamp Chess Engine

#### Overview
TuroChamp is a sophisticated Chess Engine inspired by Alan Turing and David Champernowne’s programmatic approach to Chess. This project brings Turing’s visionary chess strategy to life through modern web technologies, providing users with an engaging and challenging chess-playing experience.

[Play TuroChamp](https://unrivaled-pastelito-f2395a.netlify.app/)

### Features

**Algorithmic Implementation**: Translates Turing’s mathematical strategy into algorithmic logic with a heuristic evaluation function.
**Depth-Limited MiniMax Algorithm**: Simulates Turing’s decision-making process, providing a challenging AI opponent.
**Alpha-Beta Pruning**: Optimizes move searching to reduce computation time and enhance efficiency.
**Interactive Web Interface**: Built using Chessboard.js and Chess.js, supporting draggable pieces, real-time game updates, and move validation.
**Real-Time Game Analysis**: Includes move history, downloadable PGN files, and dynamic status updates.
**Technical Reference**: Based on Alan Turing and David Champernowne’s original research paper.

## Components
### Algorithm Details
The core algorithm translates Turing’s mathematical strategy into a heuristic evaluation function. It uses a Depth-Limited MiniMax Algorithm with Alpha-Beta Pruning to simulate intelligent decision-making.

### Interactive Interface
**Depth-Limited MiniMax Algorithm**
The MiniMax Algorithm is used to evaluate possible moves up to a certain depth, simulating Turing’s decision-making process. Alpha-Beta Pruning is incorporated to optimize the search process, reducing unnecessary computations.

**Heuristic Evaluation Function**
The heuristic evaluation function assesses the board state based on Turing’s strategy, considering material balance, piece activity, and positional factors.

### Real-Time Game Analysis
Features include move history tracking, downloadable PGN files, and dynamic status updates to keep players informed about the game state.

### Interactive Features
Chessboard.js and Chess.js
The web interface uses Chessboard.js for the visual representation of the chessboard and pieces, and Chess.js for game logic and move validation.

### Real-Time Updates
The interface supports real-time updates, ensuring smooth and responsive gameplay.

### Downloadable PGN Files
Players can download the game history in PGN format, allowing them to analyze their games later.

Contributing
You are welcome to contribute! Follow the steps below!

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

Based on insights from Alan Turing and David Champernowne’s original research paper. Read the [Research Paper](https://easychair.org/publications/preprint_open/WjKW)
