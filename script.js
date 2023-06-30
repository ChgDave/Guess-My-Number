"use strict";

//Questions about the game?
//implement the guessing game
//guess the number between 1 and 20
//score starts at 20
//if the guess is right, change start guessing to correct number!, change the background color to green, change the question mark to the secret number and change the width of the secret number block.
//if the number is too high, change start guessging to number is too high and decrease the score value by 1,
//if the number is too low, change start guessging to number is too low and decrease the score value by 1,
//when the score value is 0, change start guessing to  you failed the game and ends the game.
//when click on the again button, reset the whole game to initial condition and restart the game.

//Sub problems
//generate the secret number between 1 and 20;
//enter the input value by clicking on check button
//compare the input number with the secret number;
//if there is no input, change message to say no input
//if the input number matches the secret number, display correct number, change background color to green, change the question mark to the secret number and change the width of the secret number block.
//if the number is too high, change start guessging to number is too high and decrease the score value by 1,
//if the number is too low, change start guessging to number is too low and decrease the score value by 1,
//when the score value is 0, change start guessing to  you failed the game and ends the game.
//when click on the again button, reset the whole game to initial condition and restart the game.

/*
//Again button value
console.log(document.querySelector('.again').value);
//Question mark/Secrect number
console.log(document.querySelector('.number').textContent);
//Message
console.log(document.querySelector('.message').textContent);
//Check button value
console.log(document.querySelector('.check').value);
//Score
console.log(document.querySelector('.score').textContent);
//Highscore
console.log(document.querySelector('.highscore').textContent);
//Input
console.log(document.querySelector('.guess').value);
*/

//Generate a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//take the input value, convert it to a number
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  //check if input value is valid
  if (!guess) {
    displayMessage(`⛔️ No Number!`);
    //check if input value is equal to secret number
  } else if (guess === secretNumber) {
    displayMessage(`🥳 Correct Number!`);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "40rem";
    // document.getElementById("Image").src = "./assets/BroskiBaby.jpg";
    document.querySelector(".picture").src = "./assets/BroskiBaby.jpg";
    highscore = score > highscore ? score : highscore;
    document.querySelector(".highscore").textContent = highscore;
    //check if input value is different secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(`💥 Gave Over! You Lost...`);
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Again button to reset the game
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  //document.querySelector('.highscore').textContent = highscore;
  displayMessage(`Start guessing...`);
  document.querySelector(".number").textContent = `?`;
  document.querySelector(".guess").value = ``;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".picture").src = "./assets/BroskiAdult.jpeg";
});

//       else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = `📈 Too high!`;
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = `💥 Gave Over!`;
//       document.querySelector('.score').textContent = 0;
//     }
//     //check if input value is lower than secret number
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = `📉 Too low!`;
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = `Gave Over!`;
//       document.querySelector('.score').textContent = 0;
//     }
