// Функция генерации  случайного числа от min до max
const generateRandomNumber = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;

export default generateRandomNumber;
