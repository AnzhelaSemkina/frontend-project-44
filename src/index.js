import readlineSync from 'readline-sync';

const askQuestion = (number) => `Question: ${number}`;

const getResult = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

  return false;
};

const amountRound = 3;

const runGameBrain = (gameRules, getValuesRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  for (let i = 0; i < amountRound; i += 1) {
    const [question, correctAnswer] = getValuesRound();
    console.log(askQuestion(question));
    const answer = readlineSync.question('Your answer: ');
    const resultRound = getResult(answer, String(correctAnswer));
    if (!resultRound) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGameBrain;
