export function renderCard(userHand, inPlay)
{
  // document.getElementById('deck').innerHTML = '';

  for(var i = 0; i < inPlay.length; i++)
  {
    let inPlayCard = document.createElement("inPlayVisual"); //identify where card needs to be created back face?
    let icon = '';
    if (inPlay[i].suit == 'Hearts')
      icon='&hearts';
    else if (inPlay[i].suit == 'Spades')
      icon = '&spades';
    else if (inPlay[i].suit == 'Diamonds')
      icon = '&diams';
    else
      icon = '&clubs';

    card.innerHTML = inPlay[i].name + '' + icon;
    card.className = 'card';
    let inPLayDisplay = document.getElementById("inPlayDisplay").appendChild(card);
    document.body.insertBefore(inPlayCard, inPlayDisplay);
  }
}