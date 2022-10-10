import { runGameBrain } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const getGreatestCommonDivisor = (num1, num2) => { // Функция нахождения Наибольшего Общего Делителя
  const remainder = num1 % num2; // Определяем остаток от деления
  if (remainder === 0) {
    return num2; // если остаток 0, то 2е число - НОД
  }
  return getGreatestCommonDivisor(num2, remainder); // Идем рекурсивно вглубь до 0 в остатке
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
