import game from '../engine';
import getRandomInt from '../utils';

export const getBalancedNumber = (num) => {
  const iter = (arr) => {
    const min = Math.min.apply(null, arr);
    const max = Math.max.apply(null, arr);

    if (max === min + 1 || max === min) {
      return arr;
    }

    const newArr = arr.slice();
    newArr[newArr.indexOf(String(min))] = `${min + 1}`;
    newArr[newArr.indexOf(String(max))] = `${max - 1}`;

    return iter(newArr);
  };

  return iter(String(num).split('')).sort().join('');
};

const getGameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = getBalancedNumber(question);

  return [question, correctAnswer];
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => game(description, getGameData);
