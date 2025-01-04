import React from 'react';

const HANGMAN_PARTS = [
  // Head
  <circle key="head" cx="50" cy="25" r="10" stroke="black" strokeWidth="2" fill="none" />,
  // Body
  <line key="body" x1="50" y1="35" x2="50" y2="70" stroke="black" strokeWidth="2" />,
  // Left arm
  <line key="leftArm" x1="50" y1="50" x2="20" y2="80" stroke="black" strokeWidth="2" />,
  // Right arm
  <line key="rightArm" x1="50" y1="50" x2="80" y2="80" stroke="black" strokeWidth="2" />,
  // Left leg
  <line key="leftLeg" x1="50" y1="70" x2="20" y2="100" stroke="black" strokeWidth="2" />,
  // Right leg
  <line key="rightLeg" x1="50" y1="70" x2="80" y2="100" stroke="black" strokeWidth="2" />
];

function Hangman({ wrongGuesses }) {
  return (
    <svg height="120" width="100">
      {/* Gallows */}
      <line x1="10" y1="120" x2="90" y2="120" stroke="black" strokeWidth="2" />
      <line x1="30" y1="120" x2="30" y2="10" stroke="black" strokeWidth="2" />
      <line x1="30" y1="10" x2="50" y2="10" stroke="black" strokeWidth="2" />
      <line x1="50" y1="10" x2="50" y2="15" stroke="black" strokeWidth="2" />
      
      {/* Draw hangman parts based on wrong guesses */}
      {HANGMAN_PARTS.slice(0, wrongGuesses)}
    </svg>
  );
}

export default Hangman;