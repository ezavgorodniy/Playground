import React from 'react';
import Card from './Card';
import { CardModel } from './models/CardModel';

interface CardListProps {
    cards: CardModel[];
}

const CardList: React.FC<CardListProps> = ({cards}) => {
    return (
        <div>
            {cards.map(card => <Card card={card} />)}
        </div>
    );
  }
  
  export default CardList;