import React from 'react';
import './StarsDisplay.css';
import { range } from './Utils';

interface StarsDisplayProps {
  starCount: number;
}

const StarsDisplay: React.FC<StarsDisplayProps> = ({starCount}) => {
  return (
    <>
        {range(1, starCount).map(starId => 
        <div key={starId} className="star" />
        )}
    </>
  );
}

export default StarsDisplay;

