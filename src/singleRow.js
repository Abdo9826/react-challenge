import React from 'react';
import Select from 'react-select';

export default function SingleRow({ rowNumber }) {
  const deleteHandler = (e) => {
    e.preventDefault();
    const rowToBeDeleted = e.target.parentElement.id;
    document.getElementById(rowToBeDeleted).remove();
  };

  const options = [
    { value: '+', label: '+' },
    { value: '-', label: '-' },
  ];

  return (
    <li id={rowNumber}>
      <Select className options={options} />
      <input type='text' value='100' />
      <button onClick={deleteHandler}>Delete</button>
      <button>Disable</button>
    </li>
  );
}
