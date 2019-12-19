import React, { useState } from 'react';
import './App.scss';
import CardList from './CardList';
import { CardModel } from './models/CardModel';
import AddNewUserForm from './AddNewUserForm';

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = ({title}) => {
  const [testData, setTestData] = useState([] as CardModel[]);

  const addNewProfile = (profileData: any) => {
    setTestData(prevState => ([
      ...prevState, profileData
    ]));
  };

  return (
    <div>
      <div className="header">{title}</div>
      <AddNewUserForm onAddNewProfile={addNewProfile} />
      <CardList cards={testData} />
    </div>
  );
}

export default App;