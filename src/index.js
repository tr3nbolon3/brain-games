import readlineSync from 'readline-sync';

export default (addedMessage) => {
  const newMessage = addedMessage ? `\n${addedMessage}` : '';
  console.log(`Welcome to the Brain Games${newMessage}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};
