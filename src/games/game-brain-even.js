import runGameBrain from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const maxNumber = 100;
const minNumber = 0;
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const getData = () => {
    const randomNumber = generateRandomNumber(maxNumber, minNumber);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };

  runGameBrain(gameRule, getData);
};
