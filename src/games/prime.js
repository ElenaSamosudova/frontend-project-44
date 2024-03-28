import playGame from '../index.js';
import getRandomInt from '../utils.js';

const answer = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  playGame(answer, rules);
};
export default isBrainPrime;
