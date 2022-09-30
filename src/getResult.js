const getResult = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) { // Сравниваем ответы
    console.log('Correct!'); // Сообщаем о выигрыше
    return true; // Возвращаем результат
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`); // Сообщаем о проигрыше

  return false; // Возвращаем результат
};

export default getResult;
