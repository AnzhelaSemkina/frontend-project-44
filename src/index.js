export default (name, runRound) => {
  for (let i = 0; i < 3; i += 1) { // Запускаем цикл на 3 итерации
    const resultRound = runRound();
    if (!resultRound) { // Если раунд завершился неправильным ответом
      console.log(`Let's try again, ${name}!`); // Говорим об этом
      return; // Заканчиваем выполнение функции
    }
  }

  console.log(`Congratulations, ${name}!`); // Если цикл выполнился успешно все 3 итерации, значит все три ответа были правильными
};
