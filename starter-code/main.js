var gameBoard = document.getElementById('game-board')
var createCards=function(){
  for (var i=0; i<4; i++){
	var newCard=document.createElement('div');
	newCard.className='card';
	gameBoard.appendChild(newCard);
    }
}
createCards();



var cards=['queen', 'queen', 'king', 'king']
var cardElements = document.getElementsByClassName('card')
var cardsInPlay=[]
var createBoard = function(){
	for (var i=0; i<cards.length; i++){
	cardElements[i].setAttribute('data-card',cards[i]);
	}
}
createBoard();

for(var i=0;i<cards.length;i++){
		cardElements[i].addEventListener('click', isTwoCards);
	}

var isMatch = function(){
	if(cardsInPlay[0]===cardsInPlay[1]){
	alert('You found a match!');
	}
	else{
	alert('Try again!');
	}

	
}


function isTwoCards(){
	 cardsInPlay.push(this.getAttribute('data-card'));
	 console.log(this.getAttribute('data-card'));
	 if (this.getAttribute('data-card')==='king'){
	 	this.innerHTML="<img src='king.png'>";
	 }
	 	else{
	 		this.innerHTML="<img src='queen.png'>";
	 	}
	 if (cardsInPlay.length===2){
	 	isMatch();
	 	cardsInPlay=[];	
	 }
}





