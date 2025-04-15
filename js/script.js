import {getNext} from "./MiniMax.js";

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
const rstButton = document.querySelector('#restart');

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
let options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mode = 1;  //0 for SP and 1 for MP

let i = 1;
while (i <= 9) {
    buttons[i].style.fontSize = Math.min(buttons[i].offsetWidth, buttons[i].offsetWidth) * 0.8 + 'px';
    i += 1;
}
rstButton.style.visibility = 'hidden';

button1.onclick = clkButton1;
button2.onclick = clkButton2;
button3.onclick = clkButton3;
button4.onclick = clkButton4;
button5.onclick = clkButton5;
button6.onclick = clkButton6;
button7.onclick = clkButton7;
button8.onclick = clkButton8;
button9.onclick = clkButton9;
rstButton.onclick = restart;


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
            options.splice(options.indexOf(n), 1);
            setVal(n, symbol[curr])
            buttons[n].innerText = symbol[curr];
            steps += 1;
            checkEnd();
            curr = (curr + 1) % 2;
            topText.innerText = "Player " + (curr + 1) + "'s turn";
            return true;
        } else {
            bottomText.innerText = "InValid Selection" + n;
            return false;
        }
    }
}

function tryWin(a, b, c, sym) {
    if (getVal(a) === getVal(b) && getVal(c) === ' ' && getVal(a) === symbol[sym])
        return c;
    else if (getVal(a) === getVal(c) && getVal(b) === ' ' && getVal(a) === symbol[sym])
        return b;
    else if (getVal(c) === getVal(b) && getVal(a) === ' ' && getVal(b) === symbol[sym])
        return a;
    else
        return -1;
}


function win() {
    let x;
    if ((x = tryWin(1, 2, 3, curr)) !== -1) {
        return x;
    } else if ((x = tryWin(4, 5, 6, curr)) !== -1) {
        return x;
    } else if ((x = tryWin(7, 8, 9, curr)) !== -1) {
        return x;
    } else if ((x = tryWin(7, 4, 1, curr)) !== -1) {
        return x;
    } else if ((x = tryWin(8, 5, 2, curr)) !== -1) {
        return x;
    } else if ((x = tryWin(9, 6, 3, curr)) !== -1) {
        return x;
    } else if ((x = tryWin(7, 5, 3, curr)) !== -1) {
        return x;
    } else if ((x = tryWin(1, 5, 9, curr)) !== -1) {
        return x;
    } else
        return -1;
}

function block() {
    let x, y = (curr + 1) % 2;
    if ((x = tryWin(1, 2, 3, y)) !== -1) {
        return x;
    } else if ((x = tryWin(4, 5, 6, y)) !== -1) {
        return x;
    } else if ((x = tryWin(7, 8, 9, y)) !== -1) {
        return x;
    } else if ((x = tryWin(7, 4, 1, y)) !== -1) {
        return x;
    } else if ((x = tryWin(8, 5, 2, y)) !== -1) {
        return x;
    } else if ((x = tryWin(9, 6, 3, y)) !== -1) {
        return x;
    } else if ((x = tryWin(7, 5, 3, y)) !== -1) {
        return x;
    } else if ((x = tryWin(1, 5, 9, y)) !== -1) {
        return x;
    } else
        return -1;
}

function AIInput() {
    const res = getNext(playBox, curr, -Infinity, Infinity);
    const x = res.row * 3 + res.col + 1;
    // let x;
    // if ((x = win()) === -1) {
    //     if ((x = block()) === -1) {
    //         x = options[Math.floor(Math.random() * options.length)];
    //     }
    // }
    click(x);
}

function clkButton1() {
    if (click(1) && mode === 1)
        AIInput();
}

function clkButton2() {
    if (click(2) && mode === 1)
        AIInput();
}

function clkButton3() {
    if (click(3) && mode === 1)
        AIInput();
}

function clkButton4() {
    if (click(4) && mode === 1)
        AIInput();
}

function clkButton5() {
    if (click(5) && mode === 1)
        AIInput();
}

function clkButton6() {
    if (click(6) && mode === 1)
        AIInput();
}

function clkButton7() {
    if (click(7) && mode === 1)
        AIInput();
}

function clkButton8() {
    if (click(8) && mode === 1)
        AIInput();
}

function clkButton9() {
    if (click(9) && mode === 1)
        AIInput();
}

function end(curr) {
    if (curr === -1)
        bottomText.innerText = "Match Tie!";
    else
        bottomText.innerText = "Player " + (curr + 1) + " Won!";
    status = -1;
    rstButton.style.visibility = 'visible';
}

function checkWin(a, b, c) {
    return getVal(a) === getVal(b) && getVal(a) === getVal(c) && getVal(b) !== ' ';
}

function highlight(a, b, c) {
    buttons[a].style.backgroundColor = 'green';
    buttons[b].style.backgroundColor = 'green';
    buttons[c].style.backgroundColor = 'green';
}

function checkEnd() {
    if (checkWin(1, 2, 3)) {
        end(curr);
        highlight(1, 2, 3);
    } else if (checkWin(4, 5, 6)) {
        end(curr);
        highlight(4, 5, 6);
    } else if (checkWin(7, 8, 9)) {
        end(curr);
        highlight(7, 8, 9);
    } else if (checkWin(7, 4, 1)) {
        end(curr);
        highlight(7, 4, 1);
    } else if (checkWin(8, 5, 2)) {
        end(curr);
        highlight(8, 5, 2);
    } else if (checkWin(9, 6, 3)) {
        end(curr);
        highlight(9, 6, 3);
    } else if (checkWin(1, 5, 9)) {
        end(curr);
        highlight(1, 5, 9);
    } else if (checkWin(3, 5, 7)) {
        end(curr);
        highlight(3, 5, 7);
    } else if (steps >= 9) {
        end(-1);
    }
}

function restart() {
    //location.reload();
    let i = 1;
    while (i <= 9) {
        setVal(i, ' ')
        buttons[i].style.backgroundColor = '#c1a3de';
        buttons[i].innerText = ' ';
        i += 1
    }
    curr = 0;
    steps = 0;
    status = 0;
    options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    rstButton.style.visibility = 'hidden';
    bottomText.innerText = '';
}
