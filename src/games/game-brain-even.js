import runGameBrain from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const isEven = (number) => number % 2 === 0; // Определяем четность числа

const maxNumber = 100; // Максимальное генерируемое число
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".'; // Объясняем правила игры

export default () => {
  const runRound = () => { // Функция 1 раунда
    const randomNumber = generateRandomNumber(maxNumber); // Генерируем случайное число
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'; // Определяем правильный ответ
    return [randomNumber, correctAnswer]; // Возвращаем массив для правильной работы логики
  };

  runGameBrain(gameRule, runRound);
};
