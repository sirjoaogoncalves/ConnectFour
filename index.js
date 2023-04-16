document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    let currentPlayer = 1;
    
    const winningCombinations = [
			// Horizontal
			[0, 1, 2, 3],
			[1, 2, 3, 4],
			[2, 3, 4, 5],
			[3, 4, 5, 6],
			[7, 8, 9, 10],
			[8, 9, 10, 11],
			[9, 10, 11, 12],
			[10, 11, 12, 13],
			[14, 15, 16, 17],
			[15, 16, 17, 18],
			[16, 17, 18, 19],
			[17, 18, 19, 20],
			[21, 22, 23, 24],
			[22, 23, 24, 25],
			[23, 24, 25, 26],
			[24, 25, 26, 27],
			[28, 29, 30, 31],
			[29, 30, 31, 32],
			[30, 31, 32, 33],
			[31, 32, 33, 34],
			[35, 36, 37, 38],
			[36, 37, 38, 39],
			[37, 38, 39, 40],
			[38, 39, 40, 41],

			// Vertical
			[0, 7, 14, 21],
			[1, 8, 15, 22],
			[2, 9, 16, 23],
			[3, 10, 17, 24],
			[7, 14, 21, 28],
			[8, 15, 22, 29],
			[9, 16, 23, 30],
			[10, 17, 24, 31],
			[14, 21, 28, 35],
			[15, 22, 29, 36],
			[16, 23, 30, 37],
			[17, 24, 31, 38],
			[21, 28, 35, 42],
			[22, 29, 36, 43],
			[23, 30, 37, 44],
			[24, 31, 38, 45],
			[28, 35, 42, 49],
			[29, 36, 43, 50],
			[30, 37, 44, 51],
			[31, 38, 45, 52],
			[35, 42, 49, 56],
			[36, 43, 50, 57],
			[37, 44, 51, 58],
			[38, 45, 52, 59],

			// Diagonal (top left to bottom right)
			[0, 8, 16, 24],
			[1, 9, 17, 25],
			[2, 10, 18, 26],
			[3, 11, 19, 27],
			[7, 15, 23, 31],
			[8, 16, 24, 32],
			[9, 17, 25, 33],
			[10, 18, 26, 34],
			[14, 22, 30, 38],
			[15, 23, 31, 39],
			[16, 24, 32, 40],
			[17, 25, 33, 41],
			[21, 29, 37, 45],
			[22, 30, 38, 46],
			[23, 31, 39, 47],
			[24, 32, 40, 48],
			[28, 36, 44, 52],
			[29, 37, 45, 53],
			[30, 38, 46, 54],
			[31, 39, 47, 55],
			[35, 43, 51, 59],
			[36, 44, 52, 60],
			[37, 45, 53, 61],
			[38, 46, 54, 62],

			// Diagonal (top right to bottom left)
			[3, 9, 15, 21],
			[4, 10, 16, 22],
			[5, 11, 17, 23],
			[6, 12, 18, 24],
			[10, 16, 22, 28],
			[11, 17, 23, 29],
			[12, 18, 24, 30],
			[13, 19, 25, 31],
			[17, 23, 29, 35],
			[18, 24, 30, 36],
			[19, 25, 31, 37],
			[20, 26, 32, 38],
			[24, 30, 36, 42],
			[25, 31, 37, 43],
			[26, 32, 38, 44],
			[27, 33, 39, 45],
			[31, 37, 43, 49],
			[32, 38, 44, 50],
			[33, 39, 45, 51],
			[34, 40, 46, 52],
			[38, 44, 50, 56],
			[39, 45, 51, 57],
			[40, 46, 52, 58],
			[41, 47, 53, 59],
		];
    
    function checkBoard() {
			for (let z = 0; z < winningCombinations.length; z++) {
				const square1 = squares[winningCombinations[z][0]];
				const square2 = squares[winningCombinations[z][1]];
				const square3 = squares[winningCombinations[z][2]];
				const square4 = squares[winningCombinations[z][3]];

				if (square1.classList.contains('player-one') && square2.classList.contains('player-one') && square3.classList.contains('player-one') && square4.classList.contains('player-one')) {
					result.innerHTML = 'Player 1 wins!';
					return;
				}
				if (square1.classList.contains('player-two') && square2.classList.contains('player-two') && square3.classList.contains('player-two') && square4.classList.contains('player-two')) {
					result.innerHTML = 'Player 2 wins!';
					return;
				}
			}

			// If no winner is found, check for a draw
			const takenSquares = document.getElementsByClassName('taken');
			if (takenSquares.length === squares.length) {
				result.innerHTML = "It's a draw!";
			}
		}

		for (let i = 0; i < squares.length; i++) {
			squares[i].onclick = () => {
				if (squares[i + 7].classList.contains('taken') && !squares[i].classList.contains('taken')) {
					if (currentPlayer == 1) {
						squares[i].classList.add('taken');
						squares[i].classList.add('player-one');
						currentPlayer = 2;
						displayCurrentPlayer.innerHTML = currentPlayer;
					} else if (currentPlayer == 2) {
						squares[i].classList.add('taken');
						squares[i].classList.add('player-two');
						currentPlayer = 1;
						displayCurrentPlayer.innerHTML = currentPlayer;
					}
					checkBoard();
				} else {
					alert('Incorrect move! Please choose a valid move.');
				}
			};
		}
});