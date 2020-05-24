import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import numsToArray from '../utils/numsToArray';
import bubbleSort from '../utils/bubbleSort';
import './Bubble.css';

const Bubble = () => {
  const [sorted, setSorted] = useState([]);
  const [history, setHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [data, setData] = useState({});

  const handleChange = (event) => {
    let val = event.target.value;

    setUserInput(val);

    setSorted(numsToArray(userInput));
  };

  useEffect(() => {
    let intervalCount = 0;
    history.length > 0 &&
      setInterval(() => {
        const labels = [];
        history[intervalCount].forEach((obj) =>
          labels.push(obj.label)
        );

        const values = [];
        history[intervalCount].forEach((obj) =>
          values.push(obj.value)
        );

        intervalCount <= history.length - 2 && intervalCount++;

        const data = {
          labels: labels,
          datasets: [
            {
              label: 'Sorted',
              data: values,
            },
          ],
        };
        setData(data);
      }, 500);
  }, [history]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const arrayOfNums = numsToArray(userInput);
    const sortHistory = bubbleSort(arrayOfNums);
    setHistory(sortHistory);
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
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Bubble;
