import React, { useState } from 'react';
import useAlgorithm from './Algorithm.jsx';

export const App = () => {
  const [bottomValue, setBottomValue] = useState(Number(Meteor.settings.public.bottomValue));
  const [upperValue, setUpperValue] = useState(Number(Meteor.settings.public.upperValue));
  const [firstDivider, setFirstDivider] = useState(Meteor.settings.public.firstDivider);
  const [secondDivider, setSecondDivider] = useState(Meteor.settings.public.secondDivider);

  const algorithmArr = useAlgorithm(bottomValue, upperValue, firstDivider, secondDivider);

  return (
    <div>
      <h1>Welcome to Meteor!</h1>

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
      
      <table>
        <tbody>
          {algorithmArr.map(x => <tr><td>{x}</td></tr>)}
        </tbody>
      </table>
    </div>
  )
};
