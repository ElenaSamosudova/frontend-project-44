import playGame from '../index.js';
import getRandomInt from '../utils.js';

const answer = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  const gcd = b ? getGCD(b, a % b) : a;
  return gcd;
};

const rules = () => {
  const num1 = getRandomInt(99);
  const num2 = getRandomInt(99);
  const result = `${num1} ${num2}`;
  const rightAnswer = getGCD(num1, num2);
  return [result, String(rightAnswer)];
};

const isBrainGcd = () => {
  playGame(answer, rules);
};
export default isBrainGcd;
