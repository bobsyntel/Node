let whosTurn = 1;
let gameOver = false;
let player1Squares = [];
let player2Squares = [];
let available = [];
const messageDiv = document.getElementById("message");
let squares = document.getElementsByClassName("square");

const winningCombos = [
    ['A1','B1','C1'], //ROW 1
    ['A2','B2','C2'], //ROW 2
    ['A3','B3','C3'], //ROW 3
    ['A1','A2','A3'], //COLUMN 1
    ['B1','B2','B3'], //COLUMN 2
    ['C1','C2','C3'], //COLUMN 3
    ['A1','B2','C3'], //DIAG 1
    ['A3','B2','C1'] //DIAG 2
];
console.log(squares)
for(let i = 0; i < squares.length;i++){
	// console.log(squares[i]);
	squares[i].addEventListener('click',function(event){
		markSquare(squares[i].id);
	})
}
// squares.forEach(function(square){

// 	});

function markSquare(squareID){
	// console.log(squareID);
	 const clickedSquare = document.getElementById(squareID);
	// clickedSquare.innerHTML = `X`;
	if(clickedSquare.innerHTML !== `-`){
			messageDiv.innerHTML = `Sorry that square is already taken.`;
	
	}else if(whosTurn === 1){
		clickedSquare.innerHTML = `X`;
		whosTurn = 2;
		player1Squares.push(clickedSquare.id);
		available.push(clickedSquare.id);
		console.log(player1Squares);
		checkWin(1,player1Squares);
		computerTurn();
	}else{
		clickedSquare.innerHTML = 'O';
		whosTurn = 1;
		player2Squares.push(clickedSquare.id)
		available.push(clickedSquare.id);
		console.log(player2Squares);
		checkWin(2, player2Squares);
	}

}

function computerTurn(){
	let randNum = Math.floor(Math.random() * 3);
	let square = "";
	// switch(randNum){
	// 	case 1:
	// 		square = "A";
	// 		break;
	// 	case 2:
	// 		square = "B";
	// 		break;
	// 	case 3:
	// 		square = "C";
	// 		break;
	// }

	markSquare()
}
function checkWin(whoJustMarked, playerSquares){
	// console.log(whoJustMarked);
	// console.log(playerSquares);\
	for(let row = 0; row < winningCombos.length;row++){
				let squareCount = 0;
		  for(let col = 0; col < winningCombos[row].length;col++){
		  		const currentWinningSquare = winningCombos[row][col];

		  	if(playerSquares.includes(currentWinningSquare)){
		  		squareCount++;

		  	}
		  }
		  	if(squareCount === 3){
		  		messageDiv.innerHTML = `Player ${whoJustMarked} has won the game`;
		  	}
	}

}