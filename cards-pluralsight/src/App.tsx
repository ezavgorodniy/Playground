import React from 'react';
import './App.scss';
import CardList from './CardList';
import { CardModel } from './models/CardModel';

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = ({title}) => {

	const testData = [
      {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
      {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
  ] as CardModel[];

  return (
    <div>
      <div className="header">{title}</div>
      <CardList cards={testData} />
    </div>
  );
}

export default App;