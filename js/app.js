'use strict';

console.log('Hi World');

let userName = prompt('What is your name?');
alert(`I'm glad to have you here ${userName}. I want you to get to know me, through a guessing game! Plese respond with yes/no OR y/n`);

let firstGuess = prompt('Do I have any pets?').toLowerCase();

if (firstGuess === 'yes' || firstGuess === 'y'){
  //console.log('wrong user response');
  alert('That is incorrect, but I would love to get one!');
} else if(firstGuess === 'no' || firstGuess === 'n'){
  alert('That\'s right! and sad, I know.');
}

let secondGuess = prompt('Is my favorite color pink?').toLowerCase();

if (secondGuess === 'yes' || secondGuess === 'y'){
  //console.log('user is wrong');
  alert('You would be wrong. My favorite color is emerald green.');
} else if(secondGuess === 'no' || secondGuess === 'n'){
  alert('That\'s right! Nothing against pink, I just love emerald green.');
}

let thirdGuess = prompt('Do I like to workout?').toLowerCase();

if (thirdGuess === 'yes' || thirdGuess === 'y'){
  //console.log('user is right');
  alert('That is correct! Usually 5 days a week to keep my stress down.');
} else if(thirdGuess === 'no' || thirdGuess === 'n'){
  alert('Wrong, I am a nightmare if I dont workout!');
}

let fourthGuess = prompt('Do I enjoy reading?').toLowerCase();

if (fourthGuess === 'yes' || fourthGuess === 'y'){
  //console.log('correct answer');
  alert('Correct! I love to read, it\'s a good escape');
} else if(fourthGuess === 'no' || fourthGuess === 'n'){
  alert('That would be wrong.');
}

let fithGuess = prompt('Do I like to cook?').toLowerCase();

if (fithGuess === 'yes' || fithGuess === 'y'){
  //console.log('right answer');
  alert(`That's right! I challenge myself to make healthy versions of Mexican food. Thanks for playing ${userName}!`);
} else if (fithGuess === 'no' || fithGuess === 'n'){
  alert(`Incorrect, I try to make my workouts easier by cooking healthy food. Thanks for playing ${userName}`);
}



