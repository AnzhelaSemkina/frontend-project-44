import { runGameBrain } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const isEven = (number) => number % 2 === 0; // Определяем четность числа

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".'; // Объясняем правила игры
const maxNumber = 100;

export default () => {
  const runRound = () => { // Функция 1 раунда
    const randomNumber = generateRandomNumber(maxNumber); // Генерируем случайное число
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'; // Определяем правильный ответ
    return [randomNumber, correctAnswer]; // Возвращаем массив для правильной работы логики
  };

  runGameBrain(gameRule, runRound);
};
