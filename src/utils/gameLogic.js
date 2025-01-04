export const checkWin = (word, guessedLetters) => {
  return word.split('').every(letter => guessedLetters.includes(letter));
};

export const checkLose = (wrongGuesses) => {
  return wrongGuesses >= 6;
};

export const getGuessedWord = (word, guessedLetters) => {
  return word
    .split('')
    .map(letter => guessedLetters.includes(letter) ? letter : '_')
    .join(' ');
};