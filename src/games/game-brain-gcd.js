import runGameBrain from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const getGCD = (num1, num2) => {
  const remainder = num1 % num2;
  if (remainder === 0) {
    return num2;
  }
  return getGCD(num2, remainder);
};

const maxNumber = 40;
const gameRule = 'Find the greatest common divisor of given numbers.';

export default () => {
  const getData = () => {
    const num1 = generateRandomNumber(maxNumber);
    const num2 = generateRandomNumber(maxNumber);
    const question = `${num1} ${num2}`;
    const divisor = num1 > num2 ? getGCD(num1, num2) : getGCD(num2, num1);
    return [question, divisor];
  };

  runGameBrain(gameRule, getData);
};
