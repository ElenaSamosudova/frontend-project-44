import readlineSync from 'readline-sync';
import { userName } from './helloEven.js';
import getRandomInt from './randomEven.js';
import name from './helloEven.js';


name();

const nextNum = () => {
  let i = 1;
  while (i <= 3) {
    let num = getRandomInt(99);

    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && answer === 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, ${userName}!`);
      break;
    } else if (num % 2 === 0 && answer === 'yes') {
      console.log(`Correct!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, ${userName}!`);
      break;
    }
    i += 1;
  }

  if (i > 3) {
    console.log(`Congratulations, ${userName}!`);
  }

}

export default nextNum;
nextNum();