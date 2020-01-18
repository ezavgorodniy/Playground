import React from 'react';
import './PlayNumber.css';

interface PlayNumberProps {
    number: number;
}

const PlayNumber: React.FC<PlayNumberProps> = ({number}) => {
    return <button key={number} className="number">{number}</button>
     
}

export default PlayNumber;
