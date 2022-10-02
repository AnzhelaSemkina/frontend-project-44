import readlineSync from 'readline-sync';
import { greeting, startGameBrain } from '../src/index.js';
import generateRandomNumber from '../src/generateRandomNumber.js';
import getResult from '../src/getResult.js';

const name = greeting(); // Запускаем импортированное приветствие
console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); // Объясняем правила игры

const isPrime = (number) => { // Создаем функцию проверки числа
  if (number === 2) { // Если это 2, то возвращаем true
    return true;
  } else if (number < 2 || number % 2 === 0) { // Иначе Если число меньше 2 или четное - возвращаем false
    return false;
  } else {
    for (let i = 3; i < (number / 2); i += 1) { // Создаем цикл для перебора значений до половины от заданного числа, т.к. дальше проверять нет смысла
      if ((number / i === 0)) { // Если число делится на i без остатка - возвращаем false
        return false; 
      }
      return true; // Если не нашлось ни одного числа, на которое бы делилось заданное без остатка, то возвращаем true
    }
  }
};

const startRound =() => { // Функция 1 раунда игры
  const randomNumber = generateRandomNumber(0, 100); // Генерируем  1 случайное число в пределах 100
  const question = `Question: ${randomNumber}`;
  console.log(question); // Задаем вопрос со сгенерированным числом

  const answer = readlineSync.question('Your answer: '); // Получаем ответ

  const isCorrectAnswer = isPrime(randomNumber) ? 'yes' : 'no'; // Определяем правильный ответ
  return getResult(answer, isCorrectAnswer); // Определяем результат раунда
}

startGameBrain(name, startRound);
