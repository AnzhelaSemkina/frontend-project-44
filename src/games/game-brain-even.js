import { runGameBrain } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no'); // Определяем четность числа

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'; // Объясняем правила игры

export default () => {
  const runRound = () => { // Функция 1 раунда
    const randomNumber = generateRandomNumber(0, 100); // Генерируем случайное число в пределах 100
    const isCorrectAnswer = isEven(randomNumber); // Определяем правильный ответ
    const result = [randomNumber, isCorrectAnswer]; // Создаем массив для правильной работы логики
    return result;
  };

  runGameBrain(gameRules, runRound);
};
