import runGameBrain from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const getGCD = (num1, num2) => { // Функция нахождения Наибольшего Общего Делителя
  const remainder = num1 % num2; // Определяем остаток от деления
  if (remainder === 0) {
    return num2; // если остаток 0, то 2е число - НОД
  }
  return getGCD(num2, remainder); // Идем рекурсивно вглубь до 0 в остатке
};

const maxNumber = 40; // Максимальное генерируемое число
const gameRule = 'Find the greatest common divisor of given numbers.'; // Объясняем правила игры

export default () => {
  const getData = () => { // Функция 1 раунда
    const num1 = generateRandomNumber(maxNumber);// Генерируем  1случайное число
    const num2 = generateRandomNumber(maxNumber);// Генерируем  2случайное число
    const question = `${num1} ${num2}`; // Записываем пару чисел для вопроса
    // Определяем делитель в зависимости от того, какое из чисел больше
    const divisor = num1 > num2 ? getGCD(num1, num2) : getGCD(num2, num1);
    // Возвращаем массив для правильной работы логики
    return [question, divisor];
  };

  runGameBrain(gameRule, getData);
};
