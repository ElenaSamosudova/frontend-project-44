import {
  getRandomInt, name, playGame,
} from '../src/index.js';



const answer = 'Answer "yes" if the number is even, otherwise answer "no".';

const rules = () => {
  const num = getRandomInt(99);
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return [num, rightAnswer];
};

const isBrainEven = () => {
  playGame(name, answer, rules);
};
export default isBrainEven;
