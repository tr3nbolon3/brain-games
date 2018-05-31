import readlineSync from 'readline-sync';

export default (gameExplain, gameData) => {
  console.log(`Welcome to the Brain Games\n${gameExplain}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (times) => {
    const questionCount = 3;
    if (times === questionCount) {
      console.log(`Congratulations, ${name}`);
      return;
    }

    const [questionBody, correctAnswer] = gameData();
    console.log(`Question: ${questionBody}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      iter(times + 1);
      return;
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}`);
  };

  return iter(0);
};
