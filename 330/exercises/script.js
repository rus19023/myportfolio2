// Set up game variables
const boardArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

function writeById(output, input) {
  document.getElementById(output).innerHTML = input;
}
writeById('msg', '<button type="button" id="reset-button">Reset</button>');

// Core 2  - Done
 let count = 1;
 const onTap = (event) => {
    const cellId = event.target.id;
    if ((count % 2 == 0) && (count < 10)) {
       // X goes first, take turns on change of even/odd count
       if (cellId.innerText === '') {
          document.getElementById(cellId).innerText = 'X';
       }
     } else {
        if (cellId.innerText === '') {
            document.getElementById(cellId).innerText = 'O';
        }
    count++;
    checkForWin(boardArray);
    }
}
board.addEventListener('click', onTap);

// Core 3 - Reset the game - Done
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.innerText = '';
    });
    writeById('msg', 'Game Over! <button id="play" onTap="gameStart();">Play again</button>');
 });

 // Stretch 2
 function checkForDraw() {
    let winner = checkForWin();
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      if ((cell.innerText === '') && (!winner)) {
         document.getElementById('msg').innerText ="No winner (yet)!"
      }
    });
 }

// Stretch 3
function getCell(id) {
    let check = '';
    check += document.getElementById(id).innerText;
    // console.log('check inside getCells: ' + check);
    return check;
}

const checkWin = (check) => {
    const wins = 'XXX000';
    // if any row/column/diagonal has a win, check which player won
    if (wins.includes(check)) {
        if (check === 'XXX') {
            document.getElementById('msg').innerText ="X wins!";
        } else {
            document.getElementById('msg').innerText ="O wins!";
        }
    } else {
        document.getElementById('msg').innerText ="CATS! No winner, it's a draw!";
    }
}

function checkForWin(array) {
    array.forEach(rowId => {
        let check = '';
        rowId.forEach(id => {
            check += getCell(id);
            if (check.length == 3) {
                if (check === 'XXX') {
                  console.log('check Winner X: ' + check);
                  writeById(`msg`, `Game over! X wins! <button id="play" onTap="gameStart();">Play again</button>`);
                  return;
                } else if (check === 'OOO') {
                  console.log('check Winner O: ' + check);
                } else {
                  console.log('check Winner CAT: ' + check);
                }
            }
        });
    });
}