import readlineSync from 'readline-sync';

export const welcome = (addedMessage) => {
  const newMessage = addedMessage ? `\n${addedMessage}` : '';
  console.log(`Welcome to the Brain Games${newMessage}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};

export default (gameExplain, questionFunc) => {
  const name = welcome(gameExplain);

  const iter = (times = 0) => {
    if (times === 3) {
      console.log(`Congratulations, ${name}`);
      return;
    }

    const [questionBody, correctAnswer] = questionFunc();
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

  return iter();
};
