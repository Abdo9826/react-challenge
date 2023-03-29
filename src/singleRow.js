import React, { useState } from 'react';
import Select from 'react-select';

export default function SingleRow({ rowNumber }) {
  const [disable, setDisbale] = useState(false);
  const [operatort, setOperator] = useState();

  const [inputnum, setinputnum] = useState('');

  const deleteHandler = (e) => {
    e.preventDefault();
    const rowToBeDeleted = e.target.parentElement.id;
    document.getElementById(rowToBeDeleted).remove();
  };

  const options = [
    { value: 0, label: '+' },
    { value: 1, label: '-' },
  ];

  const handleDisble = () => {
    setDisbale(!disable);
  };
  const handleSelect = (value) => {
    setOperator(value.value);
  };
  console.log(operatort);

  const handleinput = (e) => {
    setinputnum(e.target.value);
  };

  console.log(inputnum);

  return (
    <li className= "container" id={rowNumber}>
      <Select className='select' onChange={handleSelect} options={options} setValue={operatort} />
      <input
        type='text'
        onChange={handleinput}
        disabled={disable ? true : false}
        value={inputnum}
      />
      <button onClick={deleteHandler}>Delete</button>
      <button id={disable ? 'enable' : 'disable'} onClick={handleDisble}>
        {disable ? 'Enable' : 'Disable'}
      </button>
    </li>
  );
}
