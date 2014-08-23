/* 	Kingdom Builder Builder
	by Jason Coeyman
	version 1.0 */

function generate() {

	// Sets which boards are available and sets placeholder for chosen boards
	var availBoards = ["paddock", "farm", "tower", "oasis", "barn", "tavern"]
	var chosenBoards = ["board1", "board2", "board3", "board4"];
	
	//Cycles through and pulls out 4 boards randomly
	for (var x = 0; x < 4; x++) {
		var currentBoardIndex = Math.floor(Math.random() * availBoards.length);
		chosenBoards[x] = availBoards[currentBoardIndex];
		availBoards.splice(currentBoardIndex, 1);
	};
	
	//outputs the boards to the html file
	document.getElementById("Board1").innerHTML = chosenBoards[0] + " " + isFlipped();
	document.getElementById("Board2").innerHTML = chosenBoards[1] + " " + isFlipped();
	document.getElementById("Board3").innerHTML = chosenBoards[2] + " " + isFlipped();
	document.getElementById("Board4").innerHTML = chosenBoards[3] + " " + isFlipped();
};

//flips a coin to see if the board should be flipped or not
function isFlipped() {
	if (Math.floor(Math.random() * 2) === 1) {
		return "flipped";
	} else {
		return "";
	};
};