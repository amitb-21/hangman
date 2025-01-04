import { useState, useEffect } from 'react';
import Hangman from './components/Hangman';
import Keyboard from './components/Keyboard';
import { getRandomWord } from './utils/words';
import { checkWin, checkLose, getGuessedWord } from './utils/gameLogic';
import './App.css';

function App() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  useEffect(() => {
    setWord(getRandomWord());
  }, []);

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters(prev => [...prev, letter]);
    
    if (!word.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
  };

  const resetGame = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  const gameOver = checkLose(wrongGuesses);
  const won = checkWin(word, guessedLetters);

  return (
    <div className="game-container">
      <h1>Hangman</h1>
      
      <div className="game-content">
        <Hangman wrongGuesses={wrongGuesses} />
        
        <div className="word-container">
          <div className="word">{getGuessedWord(word, guessedLetters)}</div>
        </div>

        {(gameOver || won) && (
          <div className="game-message">
            {won ? 'Congratulations! You won!' : 'Game Over! The word was: ' + word}
          </div>
        )}

        <Keyboard
          guessedLetters={guessedLetters}
          onGuess={handleGuess}
          gameOver={gameOver || won}
        />

        <button className="reset-button" onClick={resetGame}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;