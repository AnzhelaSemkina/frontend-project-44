#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, startGameBrain } from '../src/index.js';
import generateRandomNumber from '../src/generateRandomNumber.js';
import getResult from '../src/getResult.js';

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".'); // Объясняем правила игры

const startRound = () => {
  const randomNumber = generateRandomNumber(100); // Записываем сгенерированное число в переменную
  const question = `Question: ${randomNumber}`;
  console.log(question); // Задаем вопрос со сгенерированным числом

  const answer = readlineSync.question('Your answer: '); // Получаем ответ

  const isCorrectAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'; // Определяем правильный ответ
  return getResult(answer, isCorrectAnswer);
};

export default startRound;

startGameBrain(name);
