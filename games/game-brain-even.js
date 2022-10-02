import readlineSync from 'readline-sync';
import { greeting, startGameBrain } from '../src/index.js';
import generateRandomNumber from '../src/generateRandomNumber.js';
import getResult from '../src/getResult.js';

const name = greeting(); // Запускаем импортированное приветствие
console.log("Answer 'yes' if number even otherwise answer 'no'."); // Объясняем правила игры

const startRound = () => { // Функция 1 раунда
  const randomNumber = generateRandomNumber(0, 100); // Генерируем  1 случайное число в пределах 100
  const question = `Question: ${randomNumber}`;
  console.log(question); // Задаем вопрос со сгенерированным числом

  const answer = readlineSync.question('Your answer: '); // Получаем ответ

  const isCorrectAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'; // Определяем правильный ответ
  return getResult(answer, isCorrectAnswer); // Возвращаем результат
};

startGameBrain(name, startRound);
