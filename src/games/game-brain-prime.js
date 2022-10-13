import runGameBrain from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const isPrime = (number) => {
  if (number === 2) {
    return true;
  }
  if (number < 2 || number % 2 === 0) {
    return false;
  }
  for (let i = 3; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const maxNumber = 100;
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const getData = () => {
    const randomNumber = generateRandomNumber(maxNumber);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };

  runGameBrain(gameRule, getData);
};
