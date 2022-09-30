import readlineSync from 'readline-sync';
import startRound from '../bin/brain-even.js';

export const greeting = () => {
  console.log('Welcome to the Brain Games!'); // Приветствуем в игре
  const name = readlineSync.question('May I have your name? '); // Узнаем имя
  console.log(`Hello, ${name}!`); // Приветствуем игрока
  return name;
};

export const startGameBrain = (name) => {
  for (let i = 0; i < 3; i += 1) { // Запускаем цикл на 3 итерации
    const resultRound = startRound();
    if (!resultRound) { // Если раунд завершился неправильным ответом
      console.log(`Let's try again, ${name}!`); // Говорим об этом
      return; // Заканчиваем выполнение функции
    }
  }

  console.log(`Congratulations, ${name}!`); // Если цикл выполнился успешно все 3 итерации, значит все три ответа были правильными
};
