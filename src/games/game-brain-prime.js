import runGameBrain from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const isPrime = (number) => { // Создаем функцию проверки числа
  if (number === 2) { // Если это 2, то возвращаем true
    return true;
  }
  if (number < 2 || number % 2 === 0) { // Если же число меньше 2 или четное-возвращаем false
    return false;
  }
  for (let i = 3; i < number / 2; i += 1) { // Цикл для перебора значений до половины от числа
    if (number % i === 0) { // Если число делится на i без остатка - возвращаем false
      return false;
    }
  } // Если не нашлось ни одного числа, на которое бы делилось данное без остатка,
  return true; // то возвращаем true
};

const maxNumber = 100; // Максимальное генерируемое число
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".'; // Объясняем правила игры

export default () => {
  const runRound = () => { // Функция 1 раунда игры
    const randomNumber = generateRandomNumber(maxNumber); // Генерируем случайное число
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'; // Определяем правильный ответ
    return [randomNumber, correctAnswer]; // Возвращаем массив для правильной работы логики
  };

  runGameBrain(gameRule, runRound);
};
