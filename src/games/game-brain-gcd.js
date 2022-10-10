import { runGameBrain } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const getGreatestCommonDivisor = (num1, num2) => { // Функция нахождения Наибольшего Общего Делителя
  let number1 = num1;
  let number2 = num2;
  let remainder;
  while ((number1 % number2) >= 0) { // Создаем цикл для нахождения делителя
    remainder = number1 % number2; // Записываем в переменную остаток от деления
    number1 = number2; // Переприсваиваем переменные
    number2 = remainder;
  } // Выполняем цикл до тех пор, пока не получим 0 в остатке
  return number1; // Возвращаем число1, т.к. в предыдущей итерации это и был НОД
};

const getRemainder = (num1, num2) => {
  if (num1 > num2) { // Если 1е число больше 2го, то
    return getGreatestCommonDivisor(num1, num2); // Возвращаем результат
  }
  return getGreatestCommonDivisor(num2, num1); // Иначе возврат результата поменяв местами аругменты
};

const gameRules = 'Find the greatest common divisor of given numbers.'; // Объясняем правила игры

export default () => {
  const runRound = () => { // Функция 1 раунда
    const randomNumber1 = generateRandomNumber(1, 25); // Генерируем  1случайное число в пределах 25
    const randomNumber2 = generateRandomNumber(1, 50); // Генерируем  2cлучайное число в пределах 50
    const pairOfNumber = `${randomNumber1} ${randomNumber2}`; // Записываем пару чисел для вопроса
    // Создаем массив для правильной работы логики
    const result = [pairOfNumber, getRemainder(randomNumber1, randomNumber2)];
    return result;
  };

  runGameBrain(gameRules, runRound);
};
