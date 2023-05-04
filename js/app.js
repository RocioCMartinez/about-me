'use strict';

console.log('Hi World');

let userName = prompt('What is your name?');
alert(`I'm glad to have you here ${userName}. I want you to get to know me, through a guessing game! Plese respond with yes/no OR y/n`);


let correctAnswer = 0;

function petQuestion(){
  let firstGuess = prompt('Do I have any pets?').toLowerCase();
  
  if (firstGuess === 'yes' || firstGuess === 'y'){
    //console.log('wrong user response');
    alert('That is incorrect, but I would love to get one!');
  } else if(firstGuess === 'no' || firstGuess === 'n'){
    alert('That\'s right! and sad, I know.');
    correctAnswer++;
  }

}
petQuestion();

function colorQuestion(){
  let secondGuess = prompt('Is my favorite color pink?').toLowerCase();
  
  if (secondGuess === 'yes' || secondGuess === 'y'){
    //console.log('user is wrong');
    alert('You would be wrong. My favorite color is emerald green.');
  } else if(secondGuess === 'no' || secondGuess === 'n'){
    alert('That\'s right! Nothing against pink, I just love emerald green.');
    correctAnswer++;
  }

}
colorQuestion();

function workoutQuestion(){
  let thirdGuess = prompt('Do I like to workout?').toLowerCase();
  
  if (thirdGuess === 'yes' || thirdGuess === 'y'){
    //console.log('user is right');
    alert('That is correct! Usually 5 days a week to keep my stress down.');
    correctAnswer++;
  } else if(thirdGuess === 'no' || thirdGuess === 'n'){
    alert('Wrong, I am a nightmare if I dont workout!');
  }

}
workoutQuestion();

function readingQuestion(){
  let fourthGuess = prompt('Do I enjoy reading?').toLowerCase();
  
  if (fourthGuess === 'yes' || fourthGuess === 'y'){
    //console.log('correct answer');
    alert('Correct! I love to read, it\'s a good escape');
    correctAnswer++;
  } else if(fourthGuess === 'no' || fourthGuess === 'n'){
    alert('That would be wrong.');
  }

}
readingQuestion();

function cookQuestion(){
  let fithGuess = prompt('Do I like to cook?').toLowerCase();
  
  if (fithGuess === 'yes' || fithGuess === 'y'){
    //console.log('right answer');
    alert(`That's right! I challenge myself to make healthy versions of Mexican food. Way to go ${userName}!`);
    correctAnswer++;
  } else if (fithGuess === 'no' || fithGuess === 'n'){
    alert(`Incorrect, I try to make my workouts easier by cooking healthy food. Thanks for playing ${userName}`);
  }

}

cookQuestion();

function siblingsQuestion(){
  let sixthGuess = +prompt('Guess how many siblings I have.');
  console.log(sixthGuess);
  let mySiblings = 2;
  let userAttempts = 0;
  while (userAttempts < 4){
    if (sixthGuess === mySiblings){
      alert('Yes! That is right.');
      correctAnswer++;
      break;
    } else if (sixthGuess > mySiblings){
      alert('Your guess is too high');
    } else {
      alert('Your guess is too low');
    }
    userAttempts += 1;
    if (userAttempts === 4){
      alert('No more turns, but the answer is 2');
      break;
    }
    sixthGuess = +prompt('Guess how many siblings I have.');
  }

}

siblingsQuestion();

// for (i=0; i < mySiblings.length; i++){
//   if (firstNumber === 2){
//   alert('Yes! That is right.');
// } else if (firstNumber < 2){
//  alert('That\'s too low!');
// }

// let seventhGuess = prompt('Guess my favorite hobby!').toLowerCase();
// let favHobby = ['reading', 'dancing', 'hiking'];
// let numAttempts = 0;
// while (numAttempts < 6){
//   if (favHobby.includes(seventhGuess)){
//     alert(`You're good ${userName}!`);
//     break;
//   } else {
//     numAttempts += 1;
//     alert('Try again');
//   }
// }
// if (numAttempts === 6){
//   alert('Out of chances! Game over. The correct answers are reading, dancing, or hiking!');
// }
// let favHobby = ['reading', 'dancing', 'hiking'];
// let numAttempts = 0;
// let maxAttempt = 6;
// let correctGuess = false;
// while (numAttempts < 6 && !correctGuess) {
//   let seventhGuess = prompt('Guess my favorite hobby!').toLowerCase();
  
//   for (let i = 0; i < favHobby.length; i++) {
//     if (seventhGuess === favHobby[i]) {
//       alert(`You're good ${userName}!`);
//       correctGuess = true;
//       break;
//     }
//   }
  
//   if (numAttempts === maxAttempt) {
//     alert('Out of chances! Game over. The correct answers are reading, dancing, or hiking!');
//   } else {
//     alert('Try again');
//     numAttempts++;
//   }
// }

let favHobby = ['reading', 'dancing', 'hiking'];
let numAttempts = ;
let maxAttempt = 6;
let correctGuess = false;
while (numAttempts < maxAttempt && !correctGuess) {
  let seventhGuess = prompt('Guess my favorite hobby!').toLowerCase();
  for (let i = 0; i < favHobby.length; i++) {
    if (seventhGuess === favHobby[i]) {
      alert(`You're good ${userName}!`);
      correctGuess = true;
      correctAnswer++;
      break;
    }
  }
  if (numAttempts === maxAttempt - 1 && !correctGuess) {
    alert('Out of chances! Game over. The correct answers are reading, dancing, or hiking!');
    break;
  } else if (!correctGuess) {
    alert('Try again');
    numAttempts++;
  }
}
alert(`${userName} you got ${correctAnswer}/7 questions right!`);
