import React from 'react';
import './App.scss';
import Card from './Card';

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = ({title}) => {
  return (
    <div>
      <div className="header">{title}</div>
      <Card />
    </div>
  );
}

export default App;