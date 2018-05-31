import game from '../engine';
import getRandomInt from '../utils';

export default () => {
  const getGameData = () => {
    const question = getRandomInt(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  game('Answer "yes" if number even otherwise answer "no".', getGameData);
};
