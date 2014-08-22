/* 	Kingdom Builder Builder
	by Jason Coeyman
	version 1.0 */

function generate() {

	var availBoards = ["paddock", "farm", "tower", "oasis", "barn", "tavern"]
	var currentBoardIndex = Math.floor(Math.random() * availBoards.length);
	var board1 = availBoards[currentBoardIndex];
	availBoards.splice(currentBoardIndex, 1);
	currentBoardIndex = Math.floor(Math.random() * availBoards.length);
	var board2 = availBoards[currentBoardIndex];
	availBoards.splice(currentBoardIndex, 1);
	currentBoardIndex = Math.floor(Math.random() * availBoards.length);
	var board3 = availBoards[currentBoardIndex];
	availBoards.splice(currentBoardIndex, 1);
	currentBoardIndex = Math.floor(Math.random() * availBoards.length);
	var board4 = availBoards[currentBoardIndex];

	document.getElementById("Board1").innerHTML = board1;
	document.getElementById("Board2").innerHTML = board2;
	document.getElementById("Board3").innerHTML = board3;
	document.getElementById("Board4").innerHTML = board4;

	
};
