import runGameBrain from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const findValueOfExpression = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Invalid statement');
  }
};

const operators = ['+', '-', '*'];
const maxNumber = 20;
const gameRule = 'What is the result of the expression?';

export default () => {
  const getData = () => {
    const number1 = generateRandomNumber(maxNumber);
    const number2 = generateRandomNumber(maxNumber);
    const randomIndex = generateRandomNumber(operators.length - 1);
    const operator = operators[randomIndex];
    const expression = `${number1} ${operator} ${number2}`;
    return [expression, findValueOfExpression(number1, number2, operator)];
  };

  runGameBrain(gameRule, getData);
};
