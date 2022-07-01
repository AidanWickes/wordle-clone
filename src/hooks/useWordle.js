import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array of letter objects
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // [{letter: 'a', color: 'yellow'}, {}, {} ...]
  const formatGuess = (guess) => {
    console.log("formatting guess: ", guess);
  };

  // add a new guess to the past guesses
  // update the isCorrect property if the guess is correct
  // add one to the number of turns
  const addGuess = (guess) => {};

  // handle keypresses & track current guess
  // if use presses enter then submit the guess
  const handleKeyPress = ({ key }) => {
    if (key === "Enter") {
      //only add guess if turns < 5
      if (turn > 5) {
        console.log("All guesses used up!");
        return;
      }
      // do not allow duplicate guesses
      if (history.includes(currentGuess)) {
        console.log("Duplicate guess!");
        return;
      }
      //check if guess is 5 chars long
      if (currentGuess.length !== 5) {
        console.log("Guess must be 5 letters!");
        return;
      }
      formatGuess(currentGuess);
    }

    if (key === "Backspace") {
      setCurrentGuess((prevGuess) => {
        return prevGuess.slice(0, -1);
      });
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prevGuess) => {
          return prevGuess + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyPress };
};

export default useWordle;
