import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyPress } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyPress);

    return () => window.removeEventListener("keyup", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div>
      <div>solution - {solution}</div>
      <div>current guess - {currentGuess} </div>
    </div>
  );
}
