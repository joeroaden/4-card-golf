import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
// import gameStartLogic from './gameSetup.js';
import {gamePlay} from './gamePlay.js';
import {deck, shuffle, deal} from './gameSetup.js';
import {renderCardImg} from './renderCardImg.js';
import {renderHandImgs} from './renderCardImg.js';


$(document).ready(function() {
  let userHand = [];
  let inPlay = []; 
  let myDeck = [];

  $('#gameStartBtn').click(function() {
    myDeck = new deck();
    myDeck = shuffle(myDeck);
    userHand = deal(myDeck);
    inPlay = gamePlay(myDeck);
    renderCardImg(inPlay);
    renderHandImgs(userHand);
    $('#gamePlay').hide();
    $('#gameBoard').show();
    console.log(userHand);
    console.log(inPlay);
    console.log(myDeck);
  });

  $('#fullDeck').click(function() {
    inPlay = gamePlay(myDeck);
  });
});

// let myDeck = new deck();
// myDeck = shuffle(myDeck);
// let newHand = deal(myDeck);
// console.log(myDeck);
// console.log(newHand);

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