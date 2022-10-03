import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!'); // Приветствуем в игре
  const name = readlineSync.question('May I have your name? '); // Узнаем имя
  console.log(`Hello, ${name}!`); // Приветствуем игрока
  return name;
};
