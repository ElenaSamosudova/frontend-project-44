import readlineSync from 'readline-sync';
import { getRandomInt, name, userName } from '../src/index.js';

name();

console.log('What is the result of the expression?');

const calc = () => {
  let i = 1;

  while (i <= 3) {
    const num1 = getRandomInt(99);
    const num2 = getRandomInt(99);
    const operator = ['+', '-', '*'];
    const randomOper = operator[Math.floor(Math.random() * operator.length)];
    const result = `${num1} ${randomOper} ${num2}`;
    console.log(`Question: ${result}`);
    // eslint-disable-next-line no-eval
    const rightAnswer = eval(result);
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

const brainCalc = () => {
  calc();
};
export default brainCalc;
