import game from '../engine';

export default () => {
  const f = () => {
    const randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    return [randomNum, correctAnswer];
  };

  game('Answer "yes" if number even otherwise answer "no".', f);
};
