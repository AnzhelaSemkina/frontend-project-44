import readlineSync from 'readline-sync';
import { greeting, startGameBrain } from '../src/index.js';
import generateRandomNumber from '../src/generateRandomNumber.js';
import getResult from '../src/getResult.js';

const name = greeting(); // Запускаем импортированное приветствие
console.log('What number is missing in the progression?'); // Объясняем правила игры

function startRound() { // Функция 1 раунда
  const array = [];// Создаем пустой массив
  const randomLength = generateRandomNumber(5, 20) // Генерируем случайную длину <20 && >5
  const randomIndex = generateRandomNumber(0, (randomLength - 1)); // Генерируем случайный индекс в пределах randomLength - 1
  const randomNumber = generateRandomNumber(0, 10); // Генерируем случайное число в пределах 10 для шага прогрессии
  for (let i = 0; array.length <= randomLength; i += randomNumber) {
    array.push(`${i}`);
  } // Наполняем массив значениями прогрессии
  
  const correctAnswer = array[randomIndex]; // Определяем правильный ответ
  array[randomIndex] = '..' // Прячем одно случайное значение
  const progression = array.join(' '); // Переводим массив в строку
  const question = `Question: ${progression}`;
  console.log(question); // Задаем вопрос со сгенерированным выражением

  const answer = readlineSync.question('Your answer: '); // Получаем ответ

  return getResult(answer, String(correctAnswer)); //Возвращаем результат
}

startGameBrain(name, startRound);
