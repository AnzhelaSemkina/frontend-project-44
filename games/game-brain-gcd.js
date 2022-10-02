import readlineSync from 'readline-sync';
import { greeting, startGameBrain } from '../src/index.js';
import generateRandomNumber from '../src/generateRandomNumber.js';
import getResult from '../src/getResult.js';

const name = greeting(); // Запускаем импортированное приветствие
console.log('Find the greatest common divisor of given numbers.'); // Объясняем правила игры

const getGreatestCommonDivisor = (num1, num2) => { // Функция нахождения Наибольшего Общего Делителя
  let number1 = num1;
  let number2 = num2;
  let remainder;
  do { // Создаем цикл для нахождения делителя
    remainder = number1 % number2; // Записываем в переменную остаток от деления
    number1 = number2; // Переприсваиваем переменные
    number2 = remainder;
  } while (remainder); // Выполняем цикл до тех пор, пока не получим 0 в остатке
  return number1; // Возвращаем число1, т.к. в предыдущей итерации это и был НОД
};

const getRemainder = (num1, num2) => {
  if (num1 > num2) { // Если 1е число больше 2го, то
    return getGreatestCommonDivisor(num1, num2); // Возвращаем результат
  }
  return getGreatestCommonDivisor(num2, num1); // Иначе возврат результата поменяв местами аругменты
};

function startRound() { // Функция 1 раунда
  const randomNumber1 = generateRandomNumber(1, 25); // Генерируем  1 случайное число в пределах 25
  const randomNumber2 = generateRandomNumber(1, 50); // Генерируем  2 случайное число в пределах 50
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  console.log(question); // Задаем вопрос со сгенерированным выражением

  const answer = readlineSync.question('Your answer: '); // Получаем ответ

  // Определяем правильный ответ
  const correctAnswer = getRemainder(randomNumber1, randomNumber2); // Определяем правильный ответ
  return getResult(answer, String(correctAnswer)); // Возвращаем результат
}

startGameBrain(name, startRound);
