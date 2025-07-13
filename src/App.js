import { useState } from "react";

function Square(){
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }
  return (
    <button 
    className="square"
    onClick={handleClick}
  >
    {value}
    </button>
  );
}


export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />

      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />

      </div>
      <div className="board-row">
         <Square />
         <Square />
         <Square />

      </div>
     
     <button className="square">L</button>
     <button className="square">O</button>
     <button className="square">Z</button>
     <button className="square">E</button>
     <button className="square">E</button>
     <button className="square">N</button>
     <button className="square">A</button>
     <button className="square">T</button>
   </>
  );
}
