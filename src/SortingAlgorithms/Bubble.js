import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import numsToArray from '../utils/numsToArray';
import generateRandomArray from '../utils/generateArray';
import bubbleSort from '../utils/bubbleSort';
import InputSize from '../Components.js/InputSize';

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
        history[intervalCount].currSort.forEach((obj) =>
          labels.push(obj.label)
        );

        const values = [];
        history[intervalCount].currSort.forEach((obj) =>
          values.push(obj.value)
        );

        let newColors = new Array(Number(userInput)).fill('#7b90d2');
        newColors[history[intervalCount].swap1] = '#e87a90';
        newColors[history[intervalCount].swap2] = '#e87a90';

        intervalCount <= history.length - 2 && intervalCount++;

        const data = {
          labels: labels,
          datasets: [
            {
              backgroundColor: newColors,
              label: 'Values',
              data: values,
            },
          ],
        };
        setData(data);
      }, 16000 / Math.pow(userInput, 1.6));
  }, [history]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.length > 0) {
      setSorted([]);
      setHistory([]);
      data([]);
    }

    const arrayOfNums = numsToArray(generateRandomArray(userInput));
    const sortHistory = bubbleSort(arrayOfNums);
    setHistory(sortHistory);
  };
  return (
    <div onSubmit={handleSubmit} className="bubbleContainer">
      <InputSize
        setUserInput={setUserInput}
        userInput={userInput}
        handleChange={handleChange}
      />

      <div className="bubbleContent">
        <ul className="bubbleNumList">
          {sorted.map((obj, idx) => (
            <li key={idx} className="bubbleNum">
              {obj.value}
            </li>
          ))}
        </ul>
      </div>

      <div className="legendContainer">
        <div className="legend">
          <div className="legendTitle">Legend</div>
          <div className="legendText">
            <div className="comparedColor">
              Numbers being compared <div className="comparedNum" />
            </div>
          </div>
        </div>
      </div>

      <div className="bar">
        <Bar
          className="bar"
          data={data}
          width={100}
          height={30}
          plugins={['ChartDataLabels']}
          options={{
            title: {
              display: true,
              text: 'Bubble Sort',
              fontSize: 20,
              maintainAspectRatio: true,
            },
            legend: {
              display: false,
              position: 'bottom',
            },
            scales: {
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Original Indices',
                    fontSize: 20,
                  },
                },
              ],
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Values',
                    fontSize: 20,
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            animation: {
              duration: 0,
            },
            plugins: {
              // Change options for ALL labels of THIS CHART
              datalabels: {
                color: '#36A2EB',
                anchor: 'end',
                align: 'top',
                font: {
                  size:
                    userInput > 64
                      ? 0
                      : Math.pow(40 / Math.log2(userInput), 1.1),
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Bubble;
