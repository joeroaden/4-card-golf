function renderCard(userHand, inPlay)
{
  // document.getElementById('deck').innerHTML = '';

  for(var i = 0; i < inPlay.length; i++)
  {
    let card = inPlayCard.createElement("div"); //identify where card needs to be created 
    let icon = '';
    if (inPlay[i].suit == 'hearts')
      icon='&hearts';
    else if (inPlay[i].Suit == 'spades')
      icon = '&spades';
    else if (inPlay[i].Suit == 'diamonds')
      icon = '&diams';
    else
      icon = '&clubs';

    card.innerHTML = inPlay[i].Value + '' + icon;
    card.className = 'card';
    document.getElementById("deck").appendChild(card);
  }
}