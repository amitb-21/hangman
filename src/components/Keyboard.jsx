import React from 'react';

function Keyboard({ guessedLetters, onGuess, gameOver }) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="keyboard">
      {letters.map(letter => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter) || gameOver}
          className={`key ${guessedLetters.includes(letter) ? 'used' : ''}`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;