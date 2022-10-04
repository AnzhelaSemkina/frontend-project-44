import readlineSync from 'readline-sync';
import greet from './cli.js';

export const askQuestion = (number) => `Question: ${number}`;// Задаем вопрос со сгенерированным числом

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: '); // Получаем ответ
  return answer;
};

export const runGameBrain = (gameRules, runRound) => {
  const name = greet();
  console.log(gameRules);
  for (let i = 0; i < 3; i += 1) { // Запускаем цикл на 3 итерации
    const resultRound = runRound();
    if (!resultRound) { // Если раунд завершился неправильным ответом
      console.log(`Let's try again, ${name}!`); // Говорим об этом
      return; // Заканчиваем выполнение функции
    }
  }

  console.log(`Congratulations, ${name}!`); // Если цикл выполнился успешно все 3 итерации, значит все три ответа были правильными
};
