import readlineSync from 'readline-sync';
import { greeting, startGameBrain } from '../src/index.js';
import generateRandomNumber from '../src/generateRandomNumber.js';
import getResult from '../src/getResult.js';

const name = greeting();
console.log('Find the greatest common divisor of given numbers.'); // Объясняем правила игры

const getRemainderDivision = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  let remainder;
  do {
    remainder = number1 % number2;
    number1 = number2;
    number2 = remainder;
  } while (remainder);
  return number1;
};

const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 > num2) {
    return getRemainderDivision(num1, num2);
  }
  return getRemainderDivision(num2, num1);
};

function startRound() {
  const randomNumber1 = generateRandomNumber(25); // Генерируем  1 случайное число в пределах 25
  const randomNumber2 = generateRandomNumber(50); // Генерируем  2 случайное число в пределах 50
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  console.log(question); // Задаем вопрос со сгенерированным выражением

  const answer = readlineSync.question('Your answer: '); // Получаем ответ

  // Определяем правильный ответ
  const correctAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
  return getResult(answer, String(correctAnswer));
}

startGameBrain(name, startRound);
