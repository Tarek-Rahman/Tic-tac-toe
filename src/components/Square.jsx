import { useState } from 'react';
import Board from './Board';

function Square ()
{
  const [square, setSquare] = useState( Array( 9 ).fill( null ) )
  const [xIsNext, setXIsNext] = useState( true );
  
  function handleClick (i)
  {
    if ( square[i] || calculateWinner (square))
    {
      return;
    }


    const nextSquare = square.slice();
    xIsNext ? nextSquare[i] = "X" : nextSquare[i] = 'O';
    setSquare( nextSquare );
    setXIsNext(!xIsNext);
  }

  let winner = calculateWinner( square );
  let status;

  if ( winner )
  {
    status = 'Winner : ' + winner;
  } else
  {
    status = 'Next Player : ' + (xIsNext ? "X" : "O")
  }


  
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Board add={square[0]} onBoardClick={() => handleClick(0)}  />
        <Board add={square[1]} onBoardClick={() => handleClick(1)} />
        <Board add={square[2]} onBoardClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Board add={square[3]} onBoardClick={() => handleClick(3)} />
        <Board add={square[4]} onBoardClick={() => handleClick(4)} />
        <Board add={square[5]} onBoardClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Board add={square[6]} onBoardClick={() => handleClick(6)} />
        <Board add={square[7]} onBoardClick={() => handleClick(7)} />
        <Board add={square[8]} onBoardClick={() => handleClick(8)} />
      </div>
    </>
  )
}

function calculateWinner ( squares )
{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for ( let i = 0; i < lines.length; i++ )
  {
    const [a, b, c] = lines[i];
    if ( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] )
    {
      return squares[a];
    }
  }
  return null;
}

export default Square;