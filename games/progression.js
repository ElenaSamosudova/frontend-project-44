import readlineSync from 'readline-sync';
import { getRandomInt, name, userName } from '../src/index.js';

name();

console.log('What number is missing in the progression?');

const calc = () => {
  let i = 1;

  while (i <= 3) {
    const num1 = getRandomInt(99);
    const num2 = getRandomInt(99);
    const operator = ['+', '-', '*'];
    const randomOper = operator[Math.floor(Math.random() * operator.length)];
    const result = `${num1} ${randomOper} ${num2}`;
    console.log(`Question: ${result}`);
    const rightAnswer = eval(result);
    const userAnswer = readlineSync.question('Your answer:');

    if (rightAnswer === parseInt(userAnswer)) {
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