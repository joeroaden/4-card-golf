export function card(value, name, suit){
  this.value = value;
  this.name = name;
  this.suit = suit;
}

export function deck(){
  this.names = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  this.suits = ['hearts','diamonds','spades','clubs'];
  const cards = [];

  for( let s = 0; s < this.suits.length; s++ ) {
    for( let n = 0; n < this.names.length; n++ ) {
      cards.push( new card( n+1, this.names[n], this.suits[s] ) );
    }
  }
  cards.push(new card("joker","joker","joker")); 
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