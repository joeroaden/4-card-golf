export function renderCardImg(inPlay) {
  let img = document.getElementById('inPlayDisplay');
  if (inPlay.suit === "joker") {
    img.src="https://garretthays.github.io/images/img/joker/joker.png";
  } else {
    img.src="https://garretthays.github.io/images/img/"+inPlay.suit+"/"+inPlay.name+".png";
  }
  img.style.width='258px';
  img.style.height='378px';
}

export function renderHandImgs(userHand) {
  let img1 = document.getElementById('userCardImg1');
  if (userHand[0].suit === "joker") {
    img1.src="https://garretthays.github.io/images/img/joker/joker.png";
  } else {
    img1.src="https://garretthays.github.io/images/img/"+userHand[0].suit+"/"+userHand[0].name+".png";
  }
  img1.style.width='258px';
  img1.style.height='378px';

  let img2 = document.getElementById('userCardImg2');
  if (userHand[1].suit === "joker") {
    img2.src="https://garretthays.github.io/images/img/joker/joker.png";
  } else {
    img2.src="https://garretthays.github.io/images/img/"+userHand[1].suit+"/"+userHand[1].name+".png";
  }
  img2.style.width='258px';
  img2.style.height='378px';

  let img3 = document.getElementById('userCardImg3');
  if (userHand[2].suit === "joker") {
    img3.src="https://garretthays.github.io/images/img/joker/joker.png";
  } else {
    img3.src="https://garretthays.github.io/images/img/"+userHand[2].suit+"/"+userHand[2].name+".png";
  }
  img3.style.width='258px';
  img3.style.height='378px';

  let img4 = document.getElementById('userCardImg4');
  if (userHand[3].suit === "joker") {
    img4.src="https://garretthays.github.io/images/img/joker/joker.png";
  } else {
    img4.src="https://garretthays.github.io/images/img/"+userHand[3].suit+"/"+userHand[3].name+".png";
  }
  img4.style.width='258px';
  img4.style.height='378px';
}