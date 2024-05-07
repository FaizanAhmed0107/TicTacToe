const button1 = document.querySelector('#b1');
const button2 = document.querySelector('#b2');
const button3 = document.querySelector('#b3');
const button4 = document.querySelector('#b4');
const button5 = document.querySelector('#b5');
const button6 = document.querySelector('#b6');
const button7 = document.querySelector('#b7');
const button8 = document.querySelector('#b8');
const button9 = document.querySelector('#b9');
const bottomText = document.querySelector('#bottomText');
const topText = document.querySelector('#topText');

const playBox = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]
const symbol = ['X', 'O'];
const buttons = [button1, button1, button2, button3, button4, button5, button6, button7, button8, button9];
let curr = 0;
let steps = 0;
let status = 0;

let i = 1;
while (i <= 9) {
  buttons[i].style.fontSize = Math.min(buttons[i].offsetWidth, buttons[i].offsetWidth) * 0.8 + 'px';
  i += 1;
}


button1.onclick = clkButton1;
button2.onclick = clkButton2;
button3.onclick = clkButton3;
button4.onclick = clkButton4;
button5.onclick = clkButton5;
button6.onclick = clkButton6;
button7.onclick = clkButton7;
button8.onclick = clkButton8;
button9.onclick = clkButton9;


function getVal(pos) {
  if (pos === 1)
    return playBox[0][0];
  else if (pos === 2)
    return playBox[0][1];
  else if (pos === 3)
    return playBox[0][2];
  else if (pos === 4)
    return playBox[1][0];
  else if (pos === 5)
    return playBox[1][1];
  else if (pos === 6)
    return playBox[1][2];
  else if (pos === 7)
    return playBox[2][0];
  else if (pos === 8)
    return playBox[2][1];
  else if (pos === 9)
    return playBox[2][2];
}

function setVal(pos, val) {
  if (pos === 1)
    playBox[0][0] = val;
  else if (pos === 2)
    playBox[0][1] = val;
  else if (pos === 3)
    playBox[0][2] = val;
  else if (pos === 4)
    playBox[1][0] = val;
  else if (pos === 5)
    playBox[1][1] = val;
  else if (pos === 6)
    playBox[1][2] = val;
  else if (pos === 7)
    playBox[2][0] = val;
  else if (pos === 8)
    playBox[2][1] = val;
  else if (pos === 9)
    playBox[2][2] = val;
}

function click(n) {
  if (status === 0) {
    if (getVal(n) === ' ') {
      setVal(n, symbol[curr])
      buttons[n].innerText = symbol[curr];
      steps += 1;
      checkEnd();
      curr = (curr + 1) % 2;
      topText.innerText = "Player " + (curr + 1) + "'s turn";
    } else
      bottomText.innerText = "InValid Selection";
  }
}

function clkButton1() {
  click(1);
}

function clkButton2() {
  click(2);
}

function clkButton3() {
  click(3);
}

function clkButton4() {
  click(4);
}

function clkButton5() {
  click(5);
}

function clkButton6() {
  click(6);
}

function clkButton7() {
  click(7);
}

function clkButton8() {
  click(8);
}

function clkButton9() {
  click(9);
}

function end(curr) {
  if (curr === -1)
    bottomText.innerText = "Match Tie!";
  else
    bottomText.innerText = "Player " + (curr + 1) + " Won!";
  status = -1;
}

function checkWin(a, b, c) {
  return getVal(a) === getVal(b) && getVal(a) === getVal(c) && getVal(b) !== ' ';
}

function checkEnd() {
  if (checkWin(1, 2, 3)) {
    end(curr);
    restart();
  } else if (checkWin(4, 5, 6)) {
    end(curr);
    restart();
  } else if (checkWin(7, 8, 9)) {
    end(curr);
    restart();
  } else if (checkWin(7, 4, 1)) {
    end(curr);
    restart();
  } else if (checkWin(8, 5, 2)) {
    end(curr);
    restart();
  } else if (checkWin(9, 6, 3)) {
    end(curr);
    restart();
  } else if (checkWin(1, 5, 9)) {
    end(curr);
    restart();
  } else if (checkWin(3, 5, 7)) {
    end(curr);
    restart();
  } else if (steps >= 9) {
    end(-1);
    restart();
  }
}

function restart() {
}
