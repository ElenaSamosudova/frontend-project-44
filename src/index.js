import readlineSync from 'readline-sync';

const cycleCount = 3;
const playGame = (welcome, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(welcome);

  let i = 1;

  while (i <= cycleCount) {
    const [num, rightAnswer] = rules();

    console.log(`Question: ${num}`);

    const userAnswer = readlineSync.question('Your answer:');

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
export default playGame;
