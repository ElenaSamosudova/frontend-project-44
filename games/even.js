import {
  getRandomInt, name, playGame,
} from '../src/index.js';

name();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isRules = () => {
  const num = getRandomInt(99);
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return [num, rightAnswer];
};

const isBrainEven = () => {
  playGame(isRules);
};
export default isBrainEven;
