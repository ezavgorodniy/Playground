import './Card.scss';
import React from 'react';
import { CardModel } from './models/CardModel';


interface CardProps {
  card: CardModel;
}

const Card: React.FC<CardProps> = ({card}) => {
    return (
    	<div className="github-profile">
        <img src={card.avatar_url} />
        <div className="info">
          <div className="name">{card.name}</div>
          <div className="company">{card.company}</div>
        </div>
      </div>
    );
  }
  
  export default Card;