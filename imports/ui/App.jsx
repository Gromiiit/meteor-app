import React, { useEffect } from 'react';
import useAlgorithm from './Algorithm.jsx';

export const App = () => {
  const bottomValue = Meteor.settings.public.bottomValue;
  const upperValue = Meteor.settings.public.upperValue;
  const algorithmArr = useAlgorithm(bottomValue, upperValue);

  useEffect(() => {
  	console.log(algorithmArr);
  }, [algorithmArr]);

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <table>
        <tbody>
          {algorithmArr.map(x => <tr><td>{x}</td></tr>)}
        </tbody>
      </table>
    </div>
  )
};
