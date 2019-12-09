import React, { useState } from 'react';
import './App.css';
import IncrementorButton from './IncrementorButton';
import DisplayComponent from './DisplayComponent';

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue: number) => setCounter(counter + incrementValue);
  return (
      <div className="App">
        <IncrementorButton onClick={incrementCounter} increment={1} />
        <IncrementorButton onClick={incrementCounter} increment={5} />
        <IncrementorButton onClick={incrementCounter} increment={10} />
        <IncrementorButton onClick={incrementCounter} increment={100} />
        <DisplayComponent message={counter} />
      </div>
  );
}

export default App;
