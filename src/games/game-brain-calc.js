import runGameBrain from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const findValueOfExpression = (a, b, operator) => { // Функция вычисления в зависимости от оператора
  switch (operator) { // Проверка оператора
    case '+': // Если оператор +
      return a + b; // Возвращаем сумму чисел
    case '-': // Если оператор -
      return a - b; // Возвращаем разность чисел
    case '*': // Если оператор +
      return a * b; // Возвращаем произведение чисел
    default:
      throw new Error('Invalid statement'); // Иначе возвращаем ошибку
  }
};

const operators = ['+', '-', '*'];// Создаем массив операторов
const maxNumber = 20; // Максимальное генерируемое число
const gameRule = 'What is the result of the expression?'; // Объясняем правила игры

export default () => {
  const runRound = () => { // Функция 1 раунда
    const number1 = generateRandomNumber(maxNumber);// Генерируем  1случайное число
    const number2 = generateRandomNumber(maxNumber);// Генерируем  2случайное число
    const randomIndex = generateRandomNumber(operators.length - 1);// Получаем случайный индекс
    const operator = operators[randomIndex]; // Генерируем оператор по случайному индексу
    const expression = `${number1} ${operator} ${number2}`; // Записываем выражение для вопроса
    // Возвращаем массив для правильной работы логики
    return [expression, findValueOfExpression(number1, number2, operator)];
  };

  runGameBrain(gameRule, runRound);
};
