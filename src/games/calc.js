import playGame from '../index.js';
import getRandomInt from '../utils.js';

const answer = 'What is the result of the expression?';

const rules = () => {
  const num1 = getRandomInt(99);
  const num2 = getRandomInt(99);
  const operator = ['+', '-', '*'];
  const randomOper = operator[Math.floor(Math.random() * operator.length)];
  const result = `${num1} ${randomOper} ${num2}`;

  // eslint-disable-next-line no-eval
  const rightAnswer = eval(result);
  return [result, String(rightAnswer)];
};

const isBrainCalc = () => {
  playGame(answer, rules);
};
export default isBrainCalc;
