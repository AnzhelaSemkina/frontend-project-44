import { askQuestion, getAnswer, runGameBrain } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';
import getResult from '../getResult.js';

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

export default () => {
  const gameRules = 'What is the result of the expression?'; // Объясняем правила игры
  const runRound = () => { // Функция 1 раунда
    const number1 = generateRandomNumber(0, 20);// Генерируем  1 случайное число в пределах 20
    const number2 = generateRandomNumber(0, 20);// Генерируем  2 случайное число в пределах 20
    const random = generateRandomNumber(0, (operators.length - 1)); // Генерация случайного индекса
    const operator = operators[random]; // Генерируем случайный оператор
    const expression = `${number1} ${operator} ${number2}`;

    console.log(askQuestion(expression)); // Задаем вопрос со сгенерированным выражением
    const userAnswer = getAnswer(); // Получаем ответ

    return getResult(userAnswer, String(findValueOfExpression(number1, number2, operator)));
    // Возвращаем результат сравнения ответа пользователя с правильным ответом
  };

  runGameBrain(gameRules, runRound);
};
