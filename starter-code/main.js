var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//if (cardOne == cardTwo) {
  //  alert("You found a match");
//}
//else if (cardThree == cardFour) {
 // alert("You found a match"); 
//}
//else {
 // alert("Sorry, try again");
//} 



var createCards = function() {
	var gameBoard = document.getElementById('game-board');
	for (var i = 0; i < 4; i++) {
		var newDiv = document.createElement('div');
		newDiv.className = "card";		
		gameBoard.appendChild(newDiv);
	}
}

var Cards = [queen, queen, king, king]
	var cardsInPlay = []
	for (var i = 0; i < cards.length; i++) {
		cardsInPlay  cardElement.addEventListener('click', isTwoCards)
		cardElement.setAttribute('data-card', cards[i]);
	}
	var cardsInPlay = function isTwoCards() {
		if (cardsInPlay.length === 2) {
			cardsInPlay.push(this.getAttribute('data-card'));


			
