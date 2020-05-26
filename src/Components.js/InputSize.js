import React from 'react';
import './InputSize.css';

const InputSize = ({ setUserInput, userInput }) => {
  const handleChange = (event) => {
    let val = event.target.value;
    setUserInput(val);
  };

  return (
    <form className="bubbleForm">
      <h3 className="bubbleHeader">Enter an array size below:</h3>
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
  );
};

export default InputSize;
