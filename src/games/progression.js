import game from '../engine';
import getRandomInt from '../utils';

const progressionLength = 10;

const generateProgression = (startNumber, step) => {
  const iter = (arr) => {
    const len = arr.length;
    if (len === progressionLength) {
      return arr;
    }

    return iter(arr.concat(arr[len - 1] + step));
  };

  return iter([startNumber]);
};

const getGameData = () => {
  const startNumber = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);
  const hidenItemIndex = getRandomInt(1, 10);

  const progression = generateProgression(startNumber, step);
  const correctAnswer = `${progression[hidenItemIndex]}`;
  progression[hidenItemIndex] = '..';

  const question = progression.slice().join('  ');
  return [question, correctAnswer];
};

const description = 'What number is missing in this progression?';

export default () => game(description, getGameData);
