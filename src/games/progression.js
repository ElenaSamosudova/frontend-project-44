import playGame from '../index.js';
import getRandomInt from '../utils.js';

const answer = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const rules = () => {
  const start = getRandomInt(0, 5);
  const step = getRandomInt(1, 5);
  const length = getRandomInt(5, 10);
  const progression = getProgression(start, step, length);
  const hiddenNum = getRandomInt(0, progression.length - 1);
  const rightAnswer = progression[hiddenNum];
  progression[hiddenNum] = '..';
  const result = progression.join(' ');
  return [result, String(rightAnswer)];
};

const isBrainProgression = () => {
  playGame(answer, rules);
};
export default isBrainProgression;
