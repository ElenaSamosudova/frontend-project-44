import playGame from '../index.js';
import getRandomInt from '../utils.js';

const answer = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const rules = () => {
  const number = getRandomInt();
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

const runBrainEven = () => {
  playGame(answer, rules);
};
export default runBrainEven;
