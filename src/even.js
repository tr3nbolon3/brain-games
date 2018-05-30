import readlineSync from 'readline-sync';
import welcome from './';

export default () => {
  const name = welcome('Answer "yes" if number even otherwise answer "no".');

  const iter = (times = 0) => {
    if (times === 3) {
      console.log(`Congratulations, ${name}`);
      return;
    }

    const randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      iter(times + 1);
      return;
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}`);
  };

  return iter();
};
