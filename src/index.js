import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name? ');

export const name = () => {
  console.log(`Hello, ${userName}!`);
};


export const getRandomInt = (max) => Math.floor(Math.random() * max);


