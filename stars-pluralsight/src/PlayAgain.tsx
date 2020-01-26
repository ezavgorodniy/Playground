import React from 'react';
import './StarMatch.css';

interface PlayAgainProps {
  gameStatus: string;
  onClick: () => void;
}

const PlayAgain: React.FC<PlayAgainProps> = ({onClick, gameStatus}) => {
  const handleClick = () => onClick();
  return (
    <div className="game-done">
      <div 
        className="message"
        style={{ color: gameStatus === 'lost' ? 'red' : 'green'}}
      >
        {gameStatus === 'lost' ? 'Game Over' : 'Nice'}
      </div>
      <button onClick={handleClick}>Play Again</button>
    </div>
  );
}

export default PlayAgain;
