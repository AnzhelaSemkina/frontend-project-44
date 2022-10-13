import readlineSync from 'readline-sync';

const askQuestion = (number) => `Question: ${number}`;// Задаем вопрос со сгенерированным числом

const getResult = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) { // Сравниваем ответы
    console.log('Correct!'); // Сообщаем о выигрыше
    return true; // Возвращаем результат
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`); // Сообщаем о проигрыше

  return false; // Возвращаем результат
};

const amountRound = 3; // Максимальное количество раундов игры

const runGameBrain = (gameRules, getValuesRound) => {
  console.log('Welcome to the Brain Games!'); // Приветствуем в игре
  const name = readlineSync.question('May I have your name? '); // Узнаем имя
  console.log(`Hello, ${name}!`); // Приветствуем игрока
  console.log(gameRules);
  for (let i = 0; i < amountRound; i += 1) { // Запускаем цикл на 3 раунда
    const [question, correctAnswer] = getValuesRound();
    console.log(askQuestion(question)); // Задаем вопрос со сгенерированным выражением
    const answer = readlineSync.question('Your answer: '); // Получаем ответ
    const resultRound = getResult(answer, String(correctAnswer));
    if (!resultRound) { // Если раунд завершился неправильным ответом
      console.log(`Let's try again, ${name}!`); // Говорим об этом
      return; // Заканчиваем выполнение функции
    }
  }

  console.log(`Congratulations, ${name}!`); // Если цикл выполнился успешно все 3 итерации, значит все три ответа были правильными
};

export default runGameBrain;
