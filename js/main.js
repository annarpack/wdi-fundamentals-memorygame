



var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"

	},
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-diamonds.png"

	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"

	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-diamonds.png"

	}

];

var cardsInPlay = [];
var cardId;

function flipCard(cardId) {
	
console.log("User flippd " + cards[cardId].rank + " of " + cards[cardId].suit);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage)

}

flipCard(0);
flipCard(2);


function checkForMatch() {

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");

	}
	else {
		alert("Sorry, try again.")

	}

}
}
checkForMatch();