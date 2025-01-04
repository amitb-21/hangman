import { programmingWords, techWords, generalWords } from './wordCategories';

// Combine all word categories
export const words = [
  ...programmingWords,
  ...techWords,
  ...generalWords
];

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};