import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import $ from 'jquery';


for(var i=0; i < myDeck.length; i++){
  div = document.createElement('div');
  div.className = 'card';

  if(myDeck[i].suit == 'Diamonds'){
    var ascii_char = '♦';
  } else {
    var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
  }

  div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
  document.body.appendChild(div);
}

}

// import { Object } from './businesslog.js';