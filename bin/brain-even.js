#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

// Функция генерации  случайного числа от 1 до 100
const generateRandomNumber = () => Math.round(Math.random() * 100);

// Задаем вопрос со сгенерированным числом

const startRound = () => {
  // Записываем сгенерированное число в переменную
  const question = `Question: ${generateRandomNumber()}`;
  const number = Number(question.slice(9));
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
  // Определяем правильный ответ
  const isCorrectAnswer = number % 2 === 0 ? 'yes' : 'no';
  // Сравниваем ответы
  if (answer === isCorrectAnswer) {
    console.log('Correct!'); // Сообщаем об этом
    return true; // Возвращаем результат
  } console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isCorrectAnswer}'.`); // Сообщаем об этом
  return false; // Возвращаем результат
};

const startGameBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // Объясняем правила игры

  for (let i = 0; i < 3; i += 1) { // Запускаем цикл на 3 итерации
    const isCorrect = startRound(); // Запускаем раунд
    if (!isCorrect) { // Если раунд завершился неправильным ответом
      console.log(`Let's try again, ${name}!`); // Говорим об этом
      return; // Заканчиваем выполнение функции
    }
  }
  console.log(`Congratulations, ${name}!`); // Если цикл выполнился успешно все 3 итерации, значит все три ответа были правильными
};

startGameBrainEven();