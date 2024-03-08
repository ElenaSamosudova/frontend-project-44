import { getRandomInt, name, playGame } from '../src/index.js';

name();

console.log('Find the greatest common divisor of given numbers.');

const getGCD = (a, b) => {
  const gcd = b ? getGCD(b, a % b) : a;
  return gcd;
};

const isRules = () => {
  const num1 = getRandomInt(99);
  const num2 = getRandomInt(99);
  const result = `${num1} ${num2}`;
  const rightAnswer = getGCD(num1, num2);
  return [result, String(rightAnswer)];
};

const isBrainGcd = () => {
  playGame(isRules);
};
export default isBrainGcd;
