#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!'); // Приветствуем в игре
const name = readlineSync.question('May I have your name? '); // Узнаем имя
console.log(`Hello, ${name}!`); // Приветствуем игрока

const operators = ['+', '-', '*'];// Создаем массив операторов
const random = () => Math.floor(Math.random() * operators.length);// Создаем

// Функция генерации  случайного числа от 1 до 100
const generateRandomNumber = () => Math.round(Math.random() * 100);

const expression = (a, b, operator) => { // Вычисление в зависимости от оператора
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const startRound = () => {
  const randomNumber1 = generateRandomNumber(); // Генерируем  1 случайное число
  const randomNumber2 = generateRandomNumber(); // Генерируем  2 случайное число
  const operator = operators[random()]; // Генерируем случайный оператор
  const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`;
  console.log(question); // Задаем вопрос со сгенерированным выражением

  const answer = readlineSync.question('Your answer: '); // Получаем ответ

  // Определяем правильный ответ
  const сorrectAnswer = expression(randomNumber1, randomNumber2, operator);

  if (Number(answer) === сorrectAnswer) { // Сравниваем ответы
    console.log('Correct!'); // Сообщаем о выигрыше
    return true; // Возвращаем результат
  } console.log(`'${answer}' is wrong answer ;(. Correct answer was '${сorrectAnswer}'.`); // Сообщаем о проигрыше

  return false; // Возвращаем результат
};

const startGameBrainEven = () => {
  console.log('What is the result of the expression?'); // Объясняем правила игры

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
