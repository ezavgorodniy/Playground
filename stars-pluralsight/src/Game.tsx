import React, { useState, useEffect } from 'react';
import './Game.css';
import { range, random, sum, randomSumIn } from './Utils';
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';
import PlayAgain from './PlayAgain';

interface GameProps {
  startNewGame: () => void;
}


const Game: React.FC<GameProps> = ({startNewGame}) => {
  const [stars, setStars] = useState(random(1, 9));
  const [availableNums, setAvailableNums] = useState(range(1, 9));
  const [candidateNums, setCandidateNums] = useState([] as number[]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0) {
      var timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }

  });

  const candidatesAreWrong = sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0 
  	? 'won'
    : secondsLeft === 0 ? 'lost' : 'active';

  const numberStatus = (number: number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClick = (number: number, currentStatus: string) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
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
          {gameStatus !== 'active' ? (
            <PlayAgain onClick={startNewGame} gameStatus = {gameStatus} />
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
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
}

export default Game;
