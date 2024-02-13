import readlineSync from 'readline-sync';

export const userName = readlineSync.question('May I have your name? ');
const name = () => {
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
};
export default name;
