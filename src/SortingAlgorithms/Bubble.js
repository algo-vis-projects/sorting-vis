import React, { useState } from 'react';
import numsToArray from '../utils/numsToArray.';
import bubbleSort from '../utils/bubbleSort';
import './Bubble.css';

const Bubble = () => {
  const [sorted, setSorted] = useState([]);
  const [userInput, setUserInput] = useState(0);

  const handleChange = (event) => {
    let val = event.target.value;

    setUserInput(val);
    setSorted(numsToArray(userInput));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const arr = numsToArray(userInput);
    const sortedArr = bubbleSort(arr);
    setSorted(sortedArr);
  };

  return (
    <div onSubmit={handleSubmit} className="bubbleContainer">
      <form className="bubbleForm">
        <h3 className="bubbleHeader">Bubble</h3>
        <div className="bubbleInput">
          <input
            type="number"
            required
            value={userInput}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className="bubbleContent">
        <ul className="bubbleNumList">
          {sorted.map((num) => (
            <li className="bubbleNum">{num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bubble;
