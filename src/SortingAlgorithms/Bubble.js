import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import numsToArray from '../utils/numsToArray';
import generateRandomArray from '../utils/generateArray';
import bubbleSort from '../utils/bubbleSort';
import './Bubble.css';
import InputSize from '../Components.js/InputSize';

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

        let newColors = new Array(Number(userInput)).fill('blue');
        newColors[history[intervalCount].swap1] = 'red';
        newColors[history[intervalCount].swap2] = 'red';

        intervalCount <= history.length - 2 && intervalCount++;

        const data = {
          labels: labels,
          datasets: [
            {
              backgroundColor: newColors,
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

      <Bar
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
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Indecies',
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
                size: 20,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Bubble;
