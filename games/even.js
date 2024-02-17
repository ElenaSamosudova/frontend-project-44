import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/index.js';
import { name } from '../src/index.js';
import { userName } from '../src/index.js';

name();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const even = () => {
let i = 1;

while (i <= 3) {

const num = getRandomInt(99);
  console.log(`Question: ${num}`);
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer:');

  if (rightAnswer === userAnswer) {
      console.log('Correct!');

    }

else {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
  console.log(`Let's try again, ${userName}!`);
  break;
}

i+=1;

}
if (i > 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};





  even();



