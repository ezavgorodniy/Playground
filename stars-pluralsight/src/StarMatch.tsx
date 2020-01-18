import React, { useState } from 'react';
import './StarMatch.css';
import { range, random } from './Utils';
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';

const StarMatch: React.FC = () => {
  const [stars, setStars] = useState(random(1, 9));
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay starCount={stars} />
        </div>
        <div className="right">
          {range(1, 9).map(number => 
            <PlayNumber number={number} />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
}

export default StarMatch;
