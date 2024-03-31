import playGame from '../index.js';
import getRandomInt from '../utils.js';

const answer = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  const gcd = b ? getGCD(b, a % b) : a;
  return gcd;
};

const rules = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const result = `${num1} ${num2}`;
  const rightAnswer = getGCD(num1, num2);
  return [result, String(rightAnswer)];
};

const runBrainGcd = () => {
  playGame(answer, rules);
};
export default runBrainGcd;
