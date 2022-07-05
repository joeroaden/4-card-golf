// export class Object {
//   constructor() {
//   }
// }

// 1. Establish 52 card deck:
function card(value, name, suit){
  this.value = value;
  this.name = name;
  this.suit = suit;
}

function joker(joker){
  this.joker = joker;
}

function deck(){
  this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  this.jokers = 'Joker'; //do jokers need to be individually named?
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];
  const cards = [];
    
  for( let s = 0; s < this.suits.length; s++ ) {
    for( let n = 0; n < this.names.length; n++ ) {
      cards.push( new card( n+1, this.names[n], this.suits[s] ) );
    }
  }
  cards.push(new joker(this.jokers)); //does Jokers get added to cards array?
  return cards;
}

function shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

function deal(myDeck) {
  let userHand = [];
  let card1 = Math.floor(Math.random() * myDeck.length);
  let card2 = Math.floor(Math.random() * myDeck.length);
  let card3 = Math.floor(Math.random() * myDeck.length);
  let card4 = Math.floor(Math.random() * myDeck.length);
  userHand.push(card1, card2, card3, card4);
  return userHand;
}

let myDeck = new deck();
myDeck = shuffle(myDeck);
let newDeal = deal(myDeck);
console.log(newDeal);



// 1. establish 52 card deck [x]
// 2. establish function to shuffle 52 card deck [x]
// 3. establish function to deal 4 cards to user
// 4. establish function to draw card from remaining deck array and assign to inPlay

