import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name? ');

export const name = () => {
  console.log(`Hello, ${userName}!`);
};

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const playGame = (isRules) => {
  let i = 1;

  while (i <= 3) {
    const [num, rightAnswer] = isRules();

    console.log(`Question: ${num}`);

    const userAnswer = readlineSync.question('Your answer:');

    if (rightAnswer === userAnswer) {
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
