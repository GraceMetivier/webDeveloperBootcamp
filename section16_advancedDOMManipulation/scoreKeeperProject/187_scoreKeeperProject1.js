

//0 to 0 --> they change to keep score
// Once max score is reached, number on winner's side turns green
//once max score is reached, points can no longer be collected



// player1 & 2 have clickable point counters
//dynamic with point tally in h1
//once max is reached, can't collect points any more

//reset resets the game


var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function(){
	if(!gameOver){
	p1Score++;
	if (p1Score === winningScore) {
		p1Display.classList.add("winner");
		gameOver = true;
	}
	p1Display.textContent = p1Score;
	}
})


p2Button.addEventListener("click", function(){
	if(!gameOver){
	p2Score++;
	if (p2Score === winningScore) {
		p1Display.classList.add("winner");
		gameOver = true;
	}
	p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){

});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	//could also do p1Display.textContent = p1Score;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}


numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
