import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array of letter objects
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // [{letter: 'a', color: 'yellow'}, {}, {} ...]
  const formatGuess = (guess) => {};

  // add a new guess to the past guesses
  // update the isCorrect property if the guess is correct
  // add one to the number of turns
  const addGuess = (guess) => {};

  // handle keypresses & track current guess
  // if use presses enter then submit the guess
  const handleKeyPress = ({ key }) => {
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
