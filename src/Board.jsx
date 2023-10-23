import { useState } from "react";
import "./App.css";
import Square from "./Square";

function Board() {
  const calculateWinner = (square) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      //checks if all the squares have the same value and the value is not null.
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  };

  const [xIsNext, setXIsNext] = useState(true);

  const [square, setSquare] = useState(Array(9).fill(null));
  const nextSquare = square.slice();
  const handleClick = (i) => {
    if (calculateWinner(nextSquare) || nextSquare[i]) {
      return;
    }
    //make a copy of the array
    nextSquare[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquare(nextSquare);
  };
  const winner = calculateWinner(nextSquare);
  let stat,over;
  if (winner) {
    stat = "winner is : " + winner;
    over = "GAME OVER";
  } else {
    stat = "Next player is : " + (xIsNext ? "X" : "O");
  }

  //returns either we have our winner or the square is already filled.

  return (
    <>
      <div className="">{stat}</div>
      <div className="grid grid-cols-3">
        <Square
          value={square[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={square[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={square[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
        <Square
          value={square[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={square[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={square[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
        />
        <Square
          value={square[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={square[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={square[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
      <div>{over}</div>
    </>
  );
}

export default Board;
