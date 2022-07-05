import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
// import gameStartLogic from './gameSetup.js';
import {gamePlay} from './gamePlay.js';
import {deck} from './gameSetup.js';
import {shuffle} from './gameSetup.js';
import {deal} from './gameSetup.js';

$('#gameStartBtn').click(function() {
  let userHand = [];
  let inPlay;
  let myDeck = deck();
  myDeck = shuffle(myDeck);
  userHand = deal(myDeck);
  inPlay = gamePlay(myDeck);
  console.log(userHand);
  console.log(inPlay);
  console.log(myDeck);
});

// for(var i=0; i < myDeck.length; i++){
//   div = document.createElement('div');
//   div.className = 'card';

//   if(myDeck[i].suit == 'Diamonds'){
//     var ascii_char = '♦';
//   } else {
//     var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
//   }

//   div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
//   document.body.appendChild(div);
// }

// import { Object } from './businesslog.js';