function Passworizer(difficulty = 1) {
  // Difficulty 1: 8 Characters (4 Lowercase, 1 Uppercase, 2 Numbers, 1 Symbol)
  // Difficulty 2: 12 Characters (4 Lowercase, 4 Uppercase, 2 Numbers, 2 Symbol)
  // Difficulty 3: 18 Characters (5 Lowercase, 5 Uppercase, 4 Numbers, 4 Symbol)

  if (difficulty > 3) throw new Error('Maximun level of compression is: 3');

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

  const generateMediumPassword = () => {
    const lowCharsResult = getVariousRandomChars(4, characters.lowChars);
    const firstUpperCharsResult = getVariousRandomChars(
      1,
      characters.upperChars
    );
    const upperCharsResult = getVariousRandomChars(3, characters.upperChars);
    const numbersResult = getVariousRandomChars(2, characters.numbers);
    const symbolsResult = getVariousRandomChars(2, characters.symbols);
    const temporaryResult = lowCharsResult.concat(
      numbersResult,
      symbolsResult,
      upperCharsResult
    );
    const shuffledResult = shuffledArray(temporaryResult);
    const joinResult = firstUpperCharsResult.concat(shuffledResult);
    const stringedResult = joinResult.join('');
    return stringedResult;
  };

  const generateHardPassword = () => {
    const lowCharsResult = getVariousRandomChars(5, characters.lowChars);
    const firstUpperCharsResult = getVariousRandomChars(
      1,
      characters.upperChars
    );
    const upperCharsResult = getVariousRandomChars(5, characters.upperChars);
    const numbersResult = getVariousRandomChars(4, characters.numbers);
    const symbolsResult = getVariousRandomChars(4, characters.symbols);
    const temporaryResult = lowCharsResult.concat(
      numbersResult,
      symbolsResult,
      upperCharsResult
    );
    const shuffledResult = shuffledArray(temporaryResult);
    const joinResult = firstUpperCharsResult.concat(shuffledResult);
    const stringedResult = joinResult.join('');
    return stringedResult;
  };

  switch (difficulty) {
    case 1:
      return generateSimplePassword();
    case 2:
      return generateMediumPassword();
    case 3:
      return generateHardPassword();
    default:
      return generateSimplePassword;
  }
}

module.exports = Passworizer;
