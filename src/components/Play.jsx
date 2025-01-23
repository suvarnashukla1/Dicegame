import React from 'react';
import Total from './Total';
import Numberselector from './Numberselector';
import Rolldice from './Rolldice';
import { useState } from "react";
import Rules from './Rules';

const Play = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setshowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rolldice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else if (!selectedNumber) {
      alert(`Please Select a Number`);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetGame = () => {
    setScore(0);  // Reset the score to 0
    setSelectedNumber(undefined);  // Clear the selected number
  };

  return (
    <main>
      <div>
        <Total score={score} />
        <Numberselector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Rolldice currentDice={currentDice} rolldice={rolldice} />

      <div style={styles.buttonContainer}>
        <button id="resetButton" style={styles.button} onClick={resetGame}>Reset</button>
        <button id="rollDiceButton" style={styles.button} onClick={()=>setshowRules((prev)=> !prev)}>{showRules?"Hide" : "Show"} Rules</button>
        
      </div> {showRules && <Rules/>}
    </main>
  );
};

export default Play;

const styles = {
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column', // Stack buttons vertically
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '2px 30px',
    border:'2px solid black',
    fontSize: '18px',
    margin: '4px 0', // Reduced vertical margin between buttons
    cursor: 'pointer',
    backgroundcolor:'black',
    transition: 'background-color 0.3s ease, color 0.3s ease', // For hover effect
  },
};

const styleTag = document.createElement("style");
styleTag.innerHTML = `
  #resetButton:hover {
    background-color: #0b0505;
    color: white;
  }
  
  #rollDiceButton:hover {
    background-color: #070907;
    color: white;
  }
`;

document.head.appendChild(styleTag);
