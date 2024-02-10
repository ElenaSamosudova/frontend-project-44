import readlineSync from 'readline-sync';

export const name = (userName) => {
    userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}

