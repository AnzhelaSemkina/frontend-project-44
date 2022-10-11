import { runGameBrain } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const getProgression = (length, stepProgression) => {
  const array = [];// Создаем пустой массив
  for (let i = 0; array.length <= length; i += stepProgression) {
    array.push(`${i}`);
  } // Наполняем массив значениями прогрессии
  return array;
};

const gameRule = 'What number is missing in the progression?'; // Объясняем правила игры
const maxLength = 20;
const minLength = 5;
const maxStep = 10;

export default () => {
  const runRound = () => { // Функция 1 раунда игры
    const randomLength = generateRandomNumber(maxLength, minLength); // Генерируем случайную длину
    const randomIndex = generateRandomNumber(randomLength - 1, 0); // Генерируем случайный индекс
    const randomStep = generateRandomNumber(maxStep); // Генерируем число для шага прогрессии
    const progression = getProgression(randomLength, randomStep);// Получаем массив чисел прогрессии
    const correctAnswer = progression[randomIndex]; // Определяем правильный ответ
    progression[randomIndex] = '..'; // Прячем это значение
    const question = progression.join(' '); // Переводим массив в строку для вопроса
    // Возвращаем массив для правильной работы логики
    return [question, correctAnswer];
  };

  runGameBrain(gameRule, runRound);
};
