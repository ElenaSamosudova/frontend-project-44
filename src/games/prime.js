import {
  getRandomInt, name, playGame,
} from '../src/index.js';

name();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const rules = () => {
  const num = getRandomInt(99);
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return [num, String(rightAnswer)];
};

const isBrainPrime = () => {
  playGame(rules);
};
export default isBrainPrime;
