import readlineSync from 'readline-sync';
import greet from '../cli.js';
import runGameBrain from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';
import getResult from '../getResult.js';

const name = greet(); // Запускаем импортированное приветствие
console.log('What is the result of the expression?'); // Объясняем правила игры

const operators = ['+', '-', '*'];// Создаем массив операторов

const findValueOfExpression = (a, b, operator) => { // Функция вычисления в зависимости от оператора
  switch (operator) { // Проверка оператора
    case '+': // Если оператор +
      return a + b; // Возвращаем сумму чисел
    case '-': // Если оператор -
      return a - b; // Возвращаем разность чисел
    case '*': // Если оператор +
      return a * b; // Возвращаем произведение чисел
    default:
      return 'ERROR! Invalid statement'; // Иначе возвращаем ошибку
  }
};

const startRound = () => { // Функция 1 раунда
  const randomNumber1 = generateRandomNumber(0, 20); // Генерируем  1 случайное число в пределах 20
  const randomNumber2 = generateRandomNumber(0, 20); // Генерируем  2 случайное число в пределах 20
  const random = generateRandomNumber(0, (operators.length - 1)); // Генерация случайного индекса
  const operator = operators[random]; // Генерируем случайный оператор

  const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`;
  console.log(question); // Задаем вопрос со сгенерированным выражением

  const answer = readlineSync.question('Your answer: '); // Получаем ответ
  // Определяем правильный ответ
  const correctAnswer = findValueOfExpression(randomNumber1, randomNumber2, operator); //
  return getResult(answer, String(correctAnswer)); // Возвращаем результат
};

runGameBrain(name, startRound);
