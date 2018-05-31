import game from '../engine';

export default () => {
  const f = () => {
    const firstNum = Math.floor(Math.random() * (50 - 1)) + 1;
    const lastNum = Math.floor(Math.random() * (50 - 1)) + 1;
    const operation = Math.floor(Math.random() * 3);

    const ops = {
      0: [`${firstNum} + ${lastNum}`, `${firstNum + lastNum}`],
      1: [`${firstNum} - ${lastNum}`, `${firstNum - lastNum}`],
      2: [`${firstNum} * ${lastNum}`, `${firstNum * lastNum}`],
      3: [`${firstNum} / ${lastNum}`, `${firstNum / lastNum}`],
    };

    return ops[operation];
  };

  game('What is the result of the expression?', f);
};
