import { name, playGame } from '../src/index.js';

name();
console.log('What number is missing in the progression?');

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const getRandomArr = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isRules = () => {
  const start = getRandomArr(0, 5);
  const step = getRandomArr(1, 5);
  const length = getRandomArr(10, 15);
  const progression = getProgression(start, step, length);
  const hiddenNum = getRandomArr(0, progression.length - 1);
  const rightAnswer = progression[hiddenNum];
  progression[hiddenNum] = '..';
  const result = progression.join(' ');
  return [result, String(rightAnswer)];
};

const isBrainProgression = () => {
  playGame(isRules);
};
export default isBrainProgression;
