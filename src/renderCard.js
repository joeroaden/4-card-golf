function renderCard(userHand, inPlay)
{
  // document.getElementById('deck').innerHTML = '';

  for(var i = 0; i < userHand.length; i++)
  {
    // let card = document.createElement("div");
    // var icon = '';
    if (userHand[i].suit == 'hearts')
      icon='&hearts';
    else if (deck[i].Suit == 'spades')
      icon = '&spades';
    else if (deck[i].Suit == 'diamonds')
      icon = '&diams';
    else
      icon = '&clubs';

    card.innerHTML = deck[i].Value + '' + icon;
    card.className = 'card';
    document.getElementById("deck").appendChild(card);
  }
}