import React, { useState } from 'react';
import useAlgorithm from './Algorithm.jsx';

export const App = () => {
  const [bottomValue, setBottomValue] = useState(Number(Meteor.settings.public.bottomValue));
  const [upperValue, setUpperValue] = useState(Number(Meteor.settings.public.upperValue));
  const [firstDivider, setFirstDivider] = useState(Meteor.settings.public.firstDivider);
  const [secondDivider, setSecondDivider] = useState(Meteor.settings.public.secondDivider);

  const {result, firstDividerCount, secondDividerCount, combinedCount, plainNumbersCount} = useAlgorithm(bottomValue, upperValue, firstDivider, secondDivider);

  const download = (data, type) => {
      const hiddenElement = document.createElement('a');
      if(type === "csv"){
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(data);
        hiddenElement.download = 'output.csv';
      }
      else{
        hiddenElement.href = 'data:text/plain;charset=utf-8,' + encodeURI(data);
        hiddenElement.download = 'output.txt';
      }
      hiddenElement.target = '_blank';
      hiddenElement.click();
  }

  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <div>
        <label>Bottom limit:</label>
        <input
          type="number"
          value={bottomValue}
          onChange={e => setBottomValue(Number(e.target.value))}
        />
        
        <label>Upper limit:</label>
        <input
          type="number"
          value={upperValue}
          onChange={e => setUpperValue(Number(e.target.value))}
        />

        <label>First divisor:</label>
        <input
          type="number"
          value={firstDivider.value}
          onChange={e => setFirstDivider(prev => ({
            ...prev,
            value: Number(e.target.value)
          }))}
        />

        <label>Second divisor:</label>
        <input
          type="number"
          value={secondDivider.value}
          onChange={e => setSecondDivider(prev => ({
            ...prev,
            value: Number(e.target.value)
          }))}
        />
      </div>

      <div>
        <label>Statistics</label>
        <div>
          <label>{firstDivider.name} count:</label><a>{firstDividerCount}</a>
          <label>{secondDivider.name} count:</label><a>{secondDividerCount}</a>
          <label>{firstDivider.name + secondDivider.name} count:</label><a>{combinedCount}</a>
          <label>Plain number count:</label><a>{plainNumbersCount}</a>
        </div>
      </div>

      <div>
        <button onClick={() => download(result.map((x, i) => `${i + bottomValue},${x}\n`).join(''), "csv")}>
          Download CSV
        </button>
      </div>

      <div>
        <button onClick={() => download(result.map((x, i) => `${i + bottomValue},${x}\n`).join(''), "txt")}>
          Download TXT
        </button>
      </div>

      <div>
        <table>
          <tbody>
            {result.map((x, i) => <tr key={i}><td>{x}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
};
