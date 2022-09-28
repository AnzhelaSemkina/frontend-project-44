#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция генерации  случайного числа от 1 до 100
const generateRandomNumber = () => Math.round(Math.random() * 100);

const startRound = () => {
  const question = `Question: ${generateRandomNumber()}`;
  console.log(question); // Задаем вопрос со сгенерированным числом
  const number = Number(question.slice(9)); // Записываем сгенерированное число в переменную
  const answer = readlineSync.question('Your answer: ');
  const isCorrectAnswer = number % 2 === 0 ? 'yes' : 'no'; // Определяем правильный ответ
  if (answer === isCorrectAnswer) { // Сравниваем ответы
    console.log('Correct!'); // Сообщаем о выигрыше
    return true; // Возвращаем результат
  } console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isCorrectAnswer}'.`); // Сообщаем о проигрыше
  return false; // Возвращаем результат
};

const startGameBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
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
