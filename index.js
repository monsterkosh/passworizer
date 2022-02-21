function Passworizer(difficulty = 1) {
  // Difficulty 1: 8 Characters (4 Lowercase, 1 Uppercase, 2 Numbers, 1 Symbol)
  // Difficulty 1: 12 Characters (4 Lowercase, 1 Uppercase, 2 Numbers, 1 Symbol)

  if (difficulty > 3) return 'Maximun level of compression is: 3';

  const characters = {
    lowChars: 'abcdefghijklmnopqrstuvwxyz', // 26
    upperChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', // 26
    numbers: '0123456789', //10
    symbols: '@#$%&-_=+()[]{}<>.!?"', //21
  };

  const getOneRandomChar = (string) => {
    if (typeof string !== 'string') throw new Error('Error: String type');
    const array = string.split('');
    const lenghtOfarray = array.length;
    const randomNumber = Math.floor(Math.random() * lenghtOfarray);
    return array[randomNumber];
  };

  const getVariousRandomChars = (times, type) => {
    let result = [];
    if (typeof times !== 'number')
      throw new Error('Error: Type of times is not number');
    for (let index = 0; index < times; index++) {
      const element = getOneRandomChar(type);
      result.push(element);
    }
    return result;
  };

  const shuffledArray = (array) => {
    return array.sort((a, b) => 0.5 - Math.random());
  };

  const generateSimplePassword = () => {
    const lowCharsResult = getVariousRandomChars(4, characters.lowChars);
    const upperCharsResult = getVariousRandomChars(1, characters.upperChars);
    const numbersResult = getVariousRandomChars(2, characters.numbers);
    const symbolsResult = getVariousRandomChars(1, characters.symbols);
    const temporaryResult = lowCharsResult.concat(numbersResult, symbolsResult);
    const shuffledResult = shuffledArray(temporaryResult);
    const joinResult = upperCharsResult.concat(shuffledResult);
    const stringedResult = joinResult.join('');
    return stringedResult;
  };

  const result = generateSimplePassword();
  return result;
}

module.exports = Passworizer;
