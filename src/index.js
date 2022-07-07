import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
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
    renderCardImg(inPlay);
    console.log(myDeck);
  });

  $(".clickcard, .hovercard").click(function() {
    $(this).toggleClass("flipped");
  });
});