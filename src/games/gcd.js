import game from '../engine';
import getRandomInt from '../utils';

const getGameData = () => {
  const calcGcd = (a, b) => {
    if (a === b) {
      return a;
    }
    return a > b ? calcGcd(a - b, b) : calcGcd(a, b - a);
  };

  const a = getRandomInt(2, 110);
  const b = getRandomInt(2, 110);
  const question = `${a} ${b}`;
  const correctAnswer = `${calcGcd(a, b)}`;

  return [question, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => game(description, getGameData);
