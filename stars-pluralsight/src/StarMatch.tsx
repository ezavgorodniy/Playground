import React, { useState, useEffect } from 'react';
import './StarMatch.css';
import Game from './Game';

const StarMatch: React.FC = () => {
  const [gameId, setGameId] = useState(1);
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}

export default StarMatch;
