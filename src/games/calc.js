import game from '../engine';
import getRandomInt from '../utils';

const getGameData = () => {
  const a = getRandomInt(1, 50);
  const b = getRandomInt(1, 50);
  const operation = getRandomInt(0, 3);

  let result;
  switch (operation) {
    case 0:
      result = [`${a} + ${b}`, `${a + b}`];
      break;
    case 1:
      result = [`${a} - ${b}`, `${a - b}`];
      break;
    case 2:
      result = [`${a} * ${b}`, `${a * b}`];
      break;
    case 3:
    default:
      result = [`${a} / ${b}`, `${a / b}`];
      break;
  }

  return result;
};

const description = 'What is the result of the expression?';

export default () => game(description, getGameData);
