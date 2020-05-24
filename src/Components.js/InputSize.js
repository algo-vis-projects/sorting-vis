import React from 'react';

const InputSize = ({ setUserInput, userInput }) => {
  const handleChange = (event) => {
    let val = event.target.value;
    setUserInput(val);
  };

  return (
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
  );
};

export default InputSize;
