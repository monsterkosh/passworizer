function Passworizer(difficulty) {
  // Generated password will always start with a Capital letter.

  // Maximum difficulty
  if (difficulty > 3) throw new Error('Maximun level of compression is: 3');

  // Gets 1 random caracter from a characters type
  const getOneRandomChar = (string) => {
    if (typeof string !== 'string') throw new Error('Error: String type');
    const array = string.split('');
    const lenghtOfarray = array.length;
    const randomNumber = Math.floor(Math.random() * lenghtOfarray);
    // returns a string (1 char)
    return array[randomNumber];
  };

  // Gets various characters from a characters type
  const getVariousRandomChars = (times, type) => {
    let result = [];
    if (typeof times !== 'number')
      throw new Error('Error: Type of times is not number');
    for (let index = 0; index < times; index++) {
      const element = getOneRandomChar(type);
      result.push(element);
    }
    // returns an array of X(times) character/s(type)
    return result;
  };

  // Shuffles an array, returns array
  const shuffleArray = (array) => {
    return array.sort((a, b) => 0.5 - Math.random());
  };

  // Generates the final password
  // parameters should be (numbers) the amount of chars desired for each type
  const generatePassword = (lows, uppers, numbers, symbols) => {
    // Get the individual results of each type
    const lowCharsResult = getVariousRandomChars(lows, characters.lowChars);
    const firstUpperCharsResult = getVariousRandomChars(
      1,
      characters.upperChars
    );
    const upperCharsResult = getVariousRandomChars(
      uppers - 1,
      characters.upperChars
    );
    const numbersResult = getVariousRandomChars(numbers, characters.numbers);
    const symbolsResult = getVariousRandomChars(symbols, characters.symbols);

    // Concat a temporary result without the First Upper Character
    const temporaryResult = lowCharsResult.concat(
      numbersResult,
      symbolsResult,
      upperCharsResult
    );

    // Shuffle the temporary result
    const shuffledResult = shuffleArray(temporaryResult);

    // Join the First Upper Character with the rest of the result already shuffled
    const joinResult = firstUpperCharsResult.concat(shuffledResult);

    // Convert everything to a string
    const stringedResult = joinResult.join('');
    return stringedResult;
  };

  switch (difficulty) {
    // Difficulty 0: 8 Characters (4 Lowercase, 2 Uppercase, 2 Numbers, 0 Symbol)
    // Difficulty 1 (default): 8 Characters (4 Lowercase, 1 Uppercase, 2 Numbers, 1 Symbol)
    // Difficulty 2: 12 Characters (4 Lowercase, 4 Uppercase, 2 Numbers, 2 Symbol)
    // Difficulty 3: 18 Characters (5 Lowercase, 5 Uppercase, 4 Numbers, 4 Symbol)
    case 0:
      return generatePassword(4, 2, 2, 0);
    case 1:
      return generatePassword(4, 1, 2, 1);
    case 2:
      return generatePassword(4, 4, 2, 2);
    case 3:
      return generatePassword(5, 5, 4, 4);
    default:
      return generatePassword(4, 1, 2, 1);
  }
}

module.exports = Passworizer;
