

var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"

	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"

	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"

	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"

	}

];

var cardsInPlay = [];
var cardId;
var cardNum;




function flipCard(cardPicked) {

  console.log(cardPicked.target);
 cardNum = cardPicked.target;
 cardId = cardNum.getAttribute('data-id'); 
  console.log(cardId);
	
console.log("User flippd " + cards[cardId].rank + " of " + cards[cardId].suit);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
  
  var cardSRC = (cards[cardId].cardImage);
  cardPicked.target.setAttribute('src', cardSRC);

  checkForMatch();

}

function createBoard() {


var gameBoard = [];
gameBoard = document.getElementById('game-board');


	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
      cardElement.className = 'card';
      gameBoard.appendChild(cardElement);

	cardElement.addEventListener('click', flipCard);
		
	}
}


function checkForMatch() {
	console.log("checking for a match")

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");

	}
	else {
		alert("Sorry, try again.")

	}

}
}
createBoard();
checkForMatch();



