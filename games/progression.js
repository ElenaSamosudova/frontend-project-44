import readlineSync from 'readline-sync';
import { name, userName } from '../src/index.js';

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

const progressionGame = () => {
  let i = 1;

  while (i <= 3) {
    const start = getRandomArr(0, 5);
    const step = getRandomArr(1, 5);
 const length = getRandomArr(10, 15);
    const progression = getProgression(start, step, length);
    const hiddenNum = getRandomArr(0, progression.length - 1);
    const rightAnswer = progression[hiddenNum];
    progression[hiddenNum] = '..';
    const result = progression.join(' ');
    console.log(`Question: ${result}`);
    const userAnswer = readlineSync.question('Your answer:');

    if (rightAnswer === parseInt(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    i += 1;
  }
  if (i > 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const brainProgression = () => {
  progressionGame();
};
export default brainProgression;