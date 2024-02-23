import readlineSync from 'readline-sync';
import { getRandomInt, name, userName } from '../src/index.js';

name();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if(num % i === 0)
    return false;
 }
 return num > 1;
};

const prime = () => {
  let i = 1;

  while (i <= 3) {
    const num = getRandomInt(99);
    console.log(`Question: ${num}`);
    const rightAnswer = isPrime(num) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer:');

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    i += 1;
  }
  if (i > 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};


const brainPrime = () => {
  prime();
};
export default brainPrime;
