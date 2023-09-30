

function Board (props)
{

  
  return <button className='square' onClick={props.onBoardClick}>{props.add}</button>;
} 

export default Board;