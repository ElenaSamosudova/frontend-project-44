import readlineSync from 'readline-sync';
import { userName } from './helloEven.js';
import getRandomInt from './randomEven.js';
import name from './helloEven.js';

console.log('Welcome to the Brain Games!');
name();

const nextNum = () => {
let num = getRandomInt(99);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (num % 2 === 0 && answer === 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, ${userName}!`);
  }
  else if (num % 2 === 0 && answer === 'yes') {
  console.log(`Correct!`);
}
else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, ${userName}!`);
}
nextNum();
};

export default nextNum;
nextNum();