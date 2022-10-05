import { askQuestion, getAnswer, runGameBrain } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';
import getResult from '../getResult.js';

const getProgression = (length, stepProgression) => {
  const array = [];// Создаем пустой массив
  for (let i = 0; array.length <= length; i += stepProgression) {
    array.push(`${i}`);
  } // Наполняем массив значениями прогрессии
  return array;
};

export default () => {
  const gameRules = 'What number is missing in the progression?'; // Объясняем правила игры
  const runRound = () => { // Функция 1 раунда
    const randomLength = generateRandomNumber(5, 20); // Генерируем случайную длину <20 && >5
    const randomIndex = generateRandomNumber(0, (randomLength - 1)); // Генерируем случайный индекс
    const randomStep = generateRandomNumber(0, 10); // Генерируем число для шага прогрессии
    const array = getProgression(randomLength, randomStep); // Получаем массив чисел
    const correctAnswer = array[randomIndex]; // Определяем правильный ответ
    array[randomIndex] = '..'; // Прячем это случайное значение
    const progression = array.join(' '); // Переводим массив в строку

    console.log(askQuestion(progression)); // Задаем вопрос со сгенерированным выражением
    const userAnswer = getAnswer(); // Получаем ответ

    return getResult(userAnswer, String(correctAnswer)); // Возвращаем результат
  };

  runGameBrain(gameRules, runRound);
};
