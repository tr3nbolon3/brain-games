import game from '../engine';
import getRandomInt from '../utils';

const getBalancedNumber = (num) => {
  const iter = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    if (max === min + 1 || max === min) {
      return arr;
    }

    const newArr = arr.map((digitAsStr) => {
      const digit = +digitAsStr;
      if (digit === min) {
        return `${min + 1}`;
      }
      if (digit === max) {
        return `${max - 1}`;
      }
      return digitAsStr;
    });

    return iter(newArr);
  };

  return iter(String(num).split('')).sort().join('');
};

const getGameData = () => {
  const question = getRandomInt(100, 5000);
  const correctAnswer = getBalancedNumber(question);

  return [question, correctAnswer];
};

const description = 'Balance the given number.';

export default () => game(description, getGameData);
