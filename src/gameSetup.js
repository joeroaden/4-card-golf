//export function deck(cards) {
//   function card(value, name, suit) {
//     this.value = value;
//     this.name = name;
//     this.suit = suit;
//     this.name = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//     this.joker = 'Joker'; //do jokers need to be individually named?
//     this.suit = ['Hearts','Diamonds','Spades','Clubs'];
//     cards = [];
  
//     for( let s = 0; s < this.suit.length; s++ ) {
//       for( let n = 0; n < this.name.length; n++ ) {
//         cards.push(new card( n+1, this.name[n], this.suit[s] ) );
//       }
//     }
//     cards.push(this.joker); //does Jokers get added to cards array?
//     console.log(cards);
//     return cards;
//   }
// }
export function card(value, name, suit){
  this.value = value;
  this.name = name;
  this.suit = suit;
}

export function deck(){
  this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  this.joker = 'Joker'; //do jokers need to be individually named?
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];
  const cards = [];

  for( let s = 0; s < this.suits.length; s++ ) {
    for( let n = 0; n < this.names.length; n++ ) {
      cards.push( new card( n+1, this.names[n], this.suits[s] ) );
    }
  }
  cards.push(this.joker); //does Jokers get added to cards array?
  return cards;
}

export function shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

export function deal(myDeck) {
  let userHand = [];
  let card1 = myDeck.pop();
  let card2 = myDeck.pop();
  let card3 = myDeck.pop();
  let card4 = myDeck.pop();
  userHand.push(card1, card2, card3, card4);
  return userHand;
}
// let myDeck = new deck();
// myDeck = shuffle(myDeck);
// let userHand = deal(myDeck);
// console.log(myDeck);
// console.log(userHand);

// 1. establish 52 card deck [x]
// 2. establish function to shuffle 52 card deck [x]
// 3. establish function to deal 4 cards to user [x]
// 4. establish function to draw card from remaining deck array and assign to inPlay[x]
// 5. 

//on click user wants to replace userCard1 with inPlay card. 
//#card1 = newHand[0];
//let card1 = newHand[0]
//let drawnCard = inPlay
//drawnCard = "";
//card1 = inPlay
//
//userDiscard = userCard1
//userCard1 = inPlay
//#inPlay.hide
//
