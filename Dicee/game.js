
var diceImage1 = document.querySelector(".img1");
var diceImage2 = document.querySelector(".img2");

var player1Die;
var player2Die;

getRandomDice();
setNewDice();
setWinner();

function getRandomDice(){
    player1Die = Math.floor(Math.random() * 6) + 1;
    player2Die = Math.floor(Math.random() * 6) + 1;
}

function setNewDice() {
    var dieImage = "images/dice" + player1Die + ".png";
    diceImage1.setAttribute("src", dieImage );

    dieImage = "images/dice" + player2Die + ".png";
    diceImage2.setAttribute("src", dieImage );
}

function setWinner() {
    if (player1Die > player2Die){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (player1Die < player2Die){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "It's a tie!";
    }
}


