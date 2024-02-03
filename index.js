const $buttonStonePlayer1 = document.querySelector('.button-move-stone-1');
const $buttonPaperPlayer1 = document.querySelector('.button-move-paper-1');
const $buttonScissorsPlayer1 = document.querySelector('.button-move-scissors-1');

const $buttonStonePlayer2 = document.querySelector('.button-move-stone-2');
const $buttonPaperPlayer2 = document.querySelector('.button-move-paper-2');
const $buttonScissorsPlayer2 = document.querySelector('.button-move-scissors-2');

const $moveBox1 = document.querySelector('#move-box-1');
const $moveBox2 = document.querySelector('#move-box-2');

const $scorePlayer1 = document.querySelector('#score-1');
const $scorePlayer2 = document.querySelector('#score-2');

const $winnerTitle = document.querySelector('.winner-title');

// Adding Events to Player 1 Inputs
$buttonStonePlayer1.addEventListener('click', handleStone1Move);
$buttonPaperPlayer1.addEventListener('click', handlePaper1Move);
$buttonScissorsPlayer1.addEventListener('click', handleScissors1Move);

// Adding Events to Player 2 Inputs
$buttonStonePlayer2.addEventListener('click', handleStone2Move);
$buttonPaperPlayer2.addEventListener('click', handlePaper2Move);
$buttonScissorsPlayer2.addEventListener('click', handleScissors2Move);

let movePlayer1 = '';
let movePlayer2 = '';
let winner = 0;
let player1Score = 0;
let player2Score = 0;

function addWinnerPoint() {
    if (winner == 1) {
        player1Score = player1Score + 1;
    } else if (winner == 2) {
        player2Score = player2Score + 1;
    }
}

function printWinnerScore() {
    $scorePlayer1.innerHTML = player1Score.toString().padStart(2, '0');
    $scorePlayer2.innerHTML = player2Score.toString().padStart(2, '0');
}

function setWinner() {
    if (movePlayer1 == '' || movePlayer2 == '') {
        return
    }

    if (movePlayer1 == movePlayer2) {
        winner = 3;
    } else if (movePlayer1 == 'rock' && movePlayer2 == 'paper') {
        winner = 2;
    } else if (movePlayer1 == 'rock' && movePlayer2 == 'scissors') {
        winner = 1;
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'rock') {
        winner = 1;
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors') {
        winner = 2;
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'rock') {
        winner = 2;
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper') {
        winner = 1;
    }
}

function printWinnerName() {
    if (winner == 1) {
        $winnerTitle.innerHTML = 'Jogador 1 venceu';
    } else if (winner == 2) {
        $winnerTitle.innerHTML = 'Jogador 2 venceu';
    } else if (winner == 3) {
        $winnerTitle.innerHTML = 'Empatou';
    }
}

function resetBattleField() {
    $moveBox1.innerHTML = '';
    $moveBox2.innerHTML = '';
}

function resetMoveVariables() {
    movePlayer1 = '';
    movePlayer2 = '';
}

// Player 1 Actions
function handleStone1Move() {
    $moveBox1.innerHTML = '<img src="/images/stone.png" alt="imagem pedra" title="imagem pedra">';
    movePlayer1 = 'rock';
    setWinner();
    addWinnerPoint();
    printWinnerScore();
    printWinnerName();
    if (winner != 0) {
        setTimeout(resetBattleField, 1000);
        resetMoveVariables();
        winner = 0;
    }
}

function handlePaper1Move() {
    $moveBox1.innerHTML = '<img src="/images/paper.png" alt="imagem papel" title="imagem papel">';
    movePlayer1 = 'paper';
    setWinner();
    addWinnerPoint();
    printWinnerScore();
    printWinnerName();
    if (winner != 0) {
        setTimeout(resetBattleField, 1000);
        resetMoveVariables();
        winner = 0;
    }
}

function handleScissors1Move() {
    $moveBox1.innerHTML = '<img src="/images/scissors.png" alt="imagem tesoura" title="imagem tesoura">';
    movePlayer1 = 'scissors';
    setWinner();
    addWinnerPoint();
    printWinnerScore();
    printWinnerName();
    if (winner != 0) {
        setTimeout(resetBattleField, 1000);
        resetMoveVariables();
        winner = 0;
    }
}

// Player 2 Actions
function handleStone2Move() {
    $moveBox2.innerHTML = '<img src="/images/stone.png" alt="imagem pedra" title="imagem pedra">';
    movePlayer2 = 'rock';
    setWinner();
    addWinnerPoint();
    printWinnerScore();
    printWinnerName();
    if (winner != 0) {
        setTimeout(resetBattleField, 1000);
        resetMoveVariables();
        winner = 0;
    }
}

function handlePaper2Move() {
    $moveBox2.innerHTML = '<img src="/images/paper.png" alt="imagem papel" title="imagem papel">';
    movePlayer2 = 'paper';
    setWinner();
    addWinnerPoint();
    printWinnerScore();
    printWinnerName();
    if (winner != 0) {
        setTimeout(resetBattleField, 1000);
        resetMoveVariables();
        winner = 0;
    }
}

function handleScissors2Move() {
    $moveBox2.innerHTML = '<img src="/images/scissors.png" alt="imagem tesoura" title="imagem tesoura">';
    movePlayer2 = 'scissors';
    setWinner();
    addWinnerPoint();
    printWinnerScore();
    printWinnerName();
    if (winner != 0) {
        setTimeout(resetBattleField, 1000);
        resetMoveVariables();
        winner = 0;
    }
}
