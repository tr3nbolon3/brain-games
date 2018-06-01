import readlineSync from 'readline-sync';

export default (gameExplain, getGameData) => {
  console.log(`Welcome to the Brain Games\n${gameExplain}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const questionCount = 3;
  const iter = (times) => {
    if (times === questionCount) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    const [questionBody, correctAnswer] = getGameData();
    console.log(`Question: ${questionBody}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      iter(times + 1);
      return;
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}`);
  };

  return iter(0);
};
