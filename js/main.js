


var cards = [];
cards[0] = "queen";
cards[1] = "queen";
cards[2] = "king";
cards[3] = "king";

var cardsInPlay = [];
var cardId;

function flipCard(cardId) {
	
console.log("User flippd " + cards[cardId]);
cardsInPlay.push(cards[cardId]);

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