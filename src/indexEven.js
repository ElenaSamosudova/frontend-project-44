import readlineSync from 'readline-sync';
import name from './helloEven.js';
import getRandomInt from './randomEven.js';

console.log('Welcome to the Brain Games!');
name();

const nextNum = () => {
  const num = getRandomInt(999);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (num % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    nextNum();
  }
  return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
};

export default nextNum;
