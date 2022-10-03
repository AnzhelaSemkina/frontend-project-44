import readlineSync from 'readline-sync';
import greet from '../cli.js';
import runGameBrain from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';
import getResult from '../getResult.js';

const name = greet(); // Запускаем импортированное приветствие
console.log('Answer "yes" if the number is even, otherwise answer "no".'); // Объясняем правила игры

const startRound = () => { // Функция 1 раунда
  const randomNumber = generateRandomNumber(0, 100); // Генерируем  1 случайное число в пределах 100
  const question = `Question: ${randomNumber}`;
  console.log(question); // Задаем вопрос со сгенерированным числом

  const answer = readlineSync.question('Your answer: '); // Получаем ответ

  const isCorrectAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'; // Определяем правильный ответ
  return getResult(answer, isCorrectAnswer); // Возвращаем результат
};

runGameBrain(name, startRound);
