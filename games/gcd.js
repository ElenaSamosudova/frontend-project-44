import readlineSync from 'readline-sync';
import { getRandomInt, name, userName } from '../src/index.js';

name();

console.log('Find the greatest common divisor of given numbers.');

const getGCD = (a, b) => {
  const gcd = b ? getGCD(b, a % b) : a;
  return gcd;
};

const gsd = () => {
  let i = 1;

  while (i <= 3) {
    const num1 = getRandomInt(99);
    const num2 = getRandomInt(99);
    const result = `${num1} ${num2}`;
    console.log(`Question: ${result}`);
    const rightAnswer = getGCD(num1, num2);
    const userAnswer = readlineSync.question('Your answer:');

    if (rightAnswer.toString() === userAnswer) {
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

const brainGsd = () => {
  gsd();
  getGCD();
};
export default brainGsd;
