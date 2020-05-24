import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import numsToArray from '../utils/numsToArray';
import bubbleSort from '../utils/bubbleSort';
import './Bubble.css';

const Bubble = () => {
  const [sorted, setSorted] = useState([]);
  const [history, setHistory] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    let val = event.target.value;

    setUserInput(val);

    setSorted(numsToArray(userInput));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const arrayOfNums = numsToArray(userInput);
    const sortedArr = bubbleSort(arrayOfNums);
    setSorted(sortedArr);
  };

  const labels = [];
  sorted.forEach((obj) => labels.push(obj.label));

  const values = [];
  sorted.forEach((obj) => values.push(obj.value));

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Sorted',
        data: values,
      },
    ],
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
          {sorted.map((obj, idx) => (
            <li key={idx} className="bubbleNum">
              {obj.value}
            </li>
          ))}
        </ul>
      </div>

      <Bar
        data={data}
        width={100}
        height={30}
        options={{
          title: {
            display: true,
            text: 'Bubble Sort',
            fontSize: 20,
            maintainAspectRatio: true,
            color: ['red', 'blue', 'green'],
          },
        }}
      />
    </div>
  );
};

export default Bubble;
