import React from 'react';
import './App.css';
import Card from './Card';

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = ({title}) => {
  return (
    <div className="App">
      <div className="header">{title}</div>
      <Card />
    </div>
  );
}

export default App;
