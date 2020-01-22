import React from 'react';
import './StarMatch.css';

interface PlayAgainProps {
  onClick: () => void;
}

const PlayAgain: React.FC<PlayAgainProps> = ({onClick}) => {
  const handleClick = () => onClick();
  return (
    <div className="game-done ">
      <button onClick={handleClick}>Play Again</button>
    </div>
  );
}

export default PlayAgain;
