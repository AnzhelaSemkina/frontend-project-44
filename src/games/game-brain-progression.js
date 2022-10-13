import runGameBrain from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const getProgression = (length, stepProgression) => {
  const array = [];
  for (let i = 0; array.length <= length; i += stepProgression) {
    array.push(`${i}`);
  }
  return array;
};

const gameRule = 'What number is missing in the progression?';
const maxLength = 20;
const minLength = 5;
const maxStep = 10;

export default () => {
  const getData = () => {
    const randomLength = generateRandomNumber(maxLength, minLength);
    const randomIndex = generateRandomNumber(randomLength - 1, 0);
    const randomStep = generateRandomNumber(maxStep);
    const progression = getProgression(randomLength, randomStep);
    const correctAnswer = progression[randomIndex];
    progression[randomIndex] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
  };

  runGameBrain(gameRule, getData);
};
