import readlineSync from 'readline-sync';
import { greeting, startGameBrain } from '../src/index.js';
import generateRandomNumber from '../src/generateRandomNumber.js';
import getResult from '../src/getResult.js';

const name = greeting(); // Приветствуем
console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); // Объясняем правила игры

const isPrime = (number) => {
  if (number === 2) {
    return true;
  } else if (number < 2 || number % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i < (number / 2); i += 1) {
      if ((number / i === 0)) {
        return false;
      }
      return true;
    }
  }
};

function startRound() {
  const randomNumber = generateRandomNumber(0, 100); // Генерируем  1 случайное число в пределах 100
  const question = `Question: ${randomNumber}`;
  console.log(question); // Задаем вопрос со сгенерированным числом

  const answer = readlineSync.question('Your answer: '); // Получаем ответ

  const isCorrectAnswer = isPrime(randomNumber) ? 'yes' : 'no'; // Определяем правильный ответ
  return getResult(answer, isCorrectAnswer);
}

startGameBrain(name, startRound);
