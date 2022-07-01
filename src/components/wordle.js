import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./grid";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyPress, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyPress);

    return () => window.removeEventListener("keyup", handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      <div>solution - {solution}</div>
      <div>current guess - {currentGuess} </div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
}
