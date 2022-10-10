import { runGameBrain } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const getProgression = (length, stepProgression) => {
  const array = [];// Создаем пустой массив
  for (let i = 0; array.length <= length; i += stepProgression) {
    array.push(`${i}`);
  } // Наполняем массив значениями прогрессии
  return array;
};

const convertArrayToString = (array) => { //
  const string = array.join(' '); // Переводим массив в строку
  return string;
};

const getCorrectAnswer = (array, index) => {
  const correctAnswer = array[index]; // Определяем правильный ответ
  return correctAnswer;
};

const gameRules = 'What number is missing in the progression?'; // Объясняем правила игры

export default () => {
  const runRound = () => { // Функция 1 раунда игры
    const randomLength = generateRandomNumber(5, 20); // Генерируем случайную длину <20 && >5
    const randomIndex = generateRandomNumber(0, (randomLength - 1)); // Генерируем случайный индекс
    const randomStep = generateRandomNumber(1, 10); // Генерируем число для шага прогрессии
    const progression = getProgression(randomLength, randomStep);// Получаем массив чисел прогрессии
    const correctAnswer = getCorrectAnswer(progression, randomIndex); // Получаем правильный ответ
    progression[randomIndex] = '..'; // Прячем это значение
    // Создаем массив для правильной работы логики
    const result = [convertArrayToString(progression), correctAnswer];
    return result;
  };

  runGameBrain(gameRules, runRound);
};
