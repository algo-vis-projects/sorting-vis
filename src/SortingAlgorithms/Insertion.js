import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import numsToArray from '../utils/numsToArray';
import generateRandomArray from '../utils/generateArray';
import insertionSort from '../utils/insertionSort';
import './Bubble.css';
import InputSize from '../Components.js/InputSize';

const Insertion = () => {
  const [sorted, setSorted] = useState([]);
  const [key, setKey] = useState('');
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
        setKey(history[intervalCount].key);
        history[intervalCount].currSort.forEach((obj) =>
          labels.push(obj.label)
        );

        const values = [];
        history[intervalCount].currSort.forEach((obj) =>
          values.push(obj.value)
        );

        let newColors = new Array(Number(userInput)).fill('#7b90d2');
        newColors[history[intervalCount].comparison] = '#e87a90';

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
      }, 8000 / Math.pow(userInput, 1.6));
  }, [history]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const arrayOfNums = numsToArray(generateRandomArray(userInput));
    const sortHistory = insertionSort(arrayOfNums);
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
            <div>Key: {key || 'N/A'}</div>
            <div>
              <div className="comparedColor">
                Element being compared to key
                <div className="comparedNum" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bar">
        <Bar
          data={data}
          width={100}
          height={30}
          plugins={['ChartDataLabels']}
          options={{
            title: {
              display: true,
              text: 'Insertion Sort',
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

export default Insertion;
