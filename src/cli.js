import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!'); // Приветствуем в игре
const name = readlineSync.question('May I have your name? '); // Спрашиваем имя
console.log(`Hello, ${name}!`); // Приветствуем по имени
