import React, { useState } from 'react';
import SingleRow from './singleRow';

export default function App() {
  const [numRow, setNumRow] = useState([1]);
  const addRowHandler = () => {
    setNumRow([...numRow, numRow.length + 1]);
  };

  return (
    <div>
      <h1>My Budget Planner</h1>
      <button onClick={addRowHandler}>Add Row</button>
      {numRow.map((num) => {
        return <SingleRow key={num} rowNumber={num} />;
      })}
    </div>
  );
}
