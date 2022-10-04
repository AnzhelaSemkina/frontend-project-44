import { askQuestion, getAnswer, runGameBrain } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';
import getResult from '../getResult.js';

export default () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'; // Объясняем правила игры
  const runRound = () => { // Функция 1 раунда
    const randomNumber = generateRandomNumber(0, 100); // Генерируем случайное число в пределах 100
    console.log(askQuestion(randomNumber)); // Задаем вопрос
    const userAnswer = getAnswer(); // Получаем ответ

    const isCorrectAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'; // Определяем правильный ответ
    return getResult(userAnswer, isCorrectAnswer); // Возвращаем результат раунда
  };

  runGameBrain(gameRules, runRound);
};
