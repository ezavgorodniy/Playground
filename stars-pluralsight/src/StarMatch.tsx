import React, { useState } from 'react';
import './StarMatch.css';
import { range, random, sum, randomSumIn } from './Utils';
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';
import PlayAgain from './PlayAgain';

const StarMatch: React.FC = () => {
  const [stars, setStars] = useState(random(1, 9));
  const [availableNums, setAvailableNums] = useState(range(1, 9));
  const [candidateNums, setCandidateNums] = useState([] as number[]);

  const candidatesAreWrong = sum(candidateNums) > stars;
  const gameIsDone = availableNums.length === 0;

  const numberStatus = (number: number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const resetGame = () => { 
    setStars(random(1, 9));
    setAvailableNums(range(1, 9));
    setCandidateNums([] as number[]);
  };

  const onNumberClick = (number: number, currentStatus: string) => {
    if (currentStatus === 'used') {
      return;
    }
    const newCandidateNums = currentStatus === 'available'
                           ? candidateNums.concat(number)
                           : candidateNums.filter(cn => cn !== number);

    if (sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );

      setStars(randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([] as number[]);
    }
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameIsDone ? (
            <PlayAgain 
            onClick={resetGame} 
            />
          ) : (
            <StarsDisplay starCount={stars} />
          )}
        </div>
        <div className="right">
          {range(1, 9).map(number => 
            <PlayNumber 
              key={number}
              status={numberStatus(number)}
              number={number}
              onClick={onNumberClick} 
            />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
}

export default StarMatch;
