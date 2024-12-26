'use strict';
// const msg = document.querySelector('.message').textContent;
// 

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// const guessNum = (document.querySelector('.guess').value = 20);
// 

function startGame() {
  const audioObj = new Audio('./assest/you-loseheavy-echoed-voice-230555.mp3');
  audioObj.play();
}

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// <p class="label-highscore">
//   🥇 Highscore: <span class="highscore">0</span>
// </p>;

document.querySelector('.check').addEventListener('click', e => {
  const guessVal = Number(document.querySelector('.guess').value);
  if (!guessVal) {
    document.querySelector('.message').textContent = '⛔ No number provided!';
  } else if (randomNumber === guessVal) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = randomNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.body.style.backgroundColor = 'green';
  } else if (guessVal > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too high!';
      // document.querySelector('.score').textContent--;
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      startGame();
    }
  } else if (guessVal < randomNumber)
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too low!';
      document.querySelector('.score').textContent = score--;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      startGame();
    }
});

document.querySelector('.again').addEventListener('click', e => {
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});

let a = 2;
let b = 2;

let c = 4; // highscore
