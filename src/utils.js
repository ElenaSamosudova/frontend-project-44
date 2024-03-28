const max = 100;
const min = 0;

const getRandomInt = (
  minNum = min,
  maxNum = max,
) => Math.floor(Math.random() * maxNum) + minNum;

export default getRandomInt;
