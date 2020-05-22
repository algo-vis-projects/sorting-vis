import React, { useState } from 'react';
import './Bubble.css';

const Bubble = () => {
  const [sorted, setSorted] = useState([]);
  const [steps, setSteps] = useState([]);
  const [totalSwaps, setTotalSwaps] = useState(0);
  const [displaySwaps, setDisplaySwaps] = useState(false);
  const [userInput, setUserInput] = useState(0);

  const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; ++i) {
      let swapped = false;
      for (let j = 0; j < arr.length - i - 1; ++j) {
        if (arr[j] > arr[j + 1]) {
          setTotalSwaps(totalSwaps + 1);
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }

      if (!swapped) break;
    }

    setSorted(arr);
    setDisplaySwaps(true);
  };

  const handleChange = (event) => {
    let val = event.target.value;

    setUserInput(val);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const numsStringArr = userInput.toString().split('');
    let numsArr = [];
    numsStringArr.forEach((num) => numsArr.push(Number(num)));

    bubbleSort(numsArr);
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
        <div
          style={
            displaySwaps ? { display: 'block' } : { display: 'none' }
          }
        >
          Total swaps: {totalSwaps}
        </div>
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
