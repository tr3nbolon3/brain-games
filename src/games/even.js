import game from '../engine';
import getRandomInt from '../utils';

const getGameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => game(description, getGameData);
