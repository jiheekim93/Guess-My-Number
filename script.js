'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!😎';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;

document.querySelector('.guess').value;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//refactoring repetitions putting the code into a function.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //When there is no input
    if (!guess) {
      //       document.querySelector('.message').textContent = '🚫 No Number!';
      displayMessage('🚫 No Number!');
      //When player wins
    } else if (guess === secretNumber) {
      //       document.querySelector('.message').textContent = '🥳 Correct Number!';
      displayMessage('🥳 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      //When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 0) {
        //         document.querySelector('.message').textContent =
        //           guess > secretNumber ? '⬇️ Maybe lower...' : '⬆️ Maybe higher...';
        displayMessage(
          guess > secretNumber ? '⬇️ Maybe lower...' : '⬆️ Maybe higher...'
        );
        score--; //Score stops at 0 and the game ends.
        document.querySelector('.score').textContent = score;
      } else {
        //         document.querySelector('.message').textContent = '😩 YOU LOST!';
        displayMessage('😩 YOU LOST!');
        document.querySelector('.score').textContent = 0;
      }
    }
  }

  //     //when guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = '⬇️ Maybe lower...';
  //       score--; //Score stops at 0 and the game ends.
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😩 YOU LOST!';
  //     }
  //     //when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = '⬆️ Maybe higher...';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😩 YOU LOST!';
  //     }
  //   }
);

//Again button function (reset button)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = ''; //it was the hardest one but it was the simplest thing to do...
});
