import React from 'react';
import './PlayNumber.css';
import { Colors } from './Colors';

interface PlayNumberProps {
    number: number;
    status: string;
    onClick: (key: number, status: string) => void;
}

const PlayNumber: React.FC<PlayNumberProps> = ({number, status, onClick}) => {
    let color; 
    if (status === 'available') {
        color = Colors.available;
    } else if (status === 'used') {
        color = Colors.used;
    } else if (status === 'wrong') {
        color = Colors.wrong;
    } else if (status === 'candidate') {
        color = Colors.candidate;
    }

    const handleClick = () => onClick(number, status);

    return <button 
        style={{ backgroundColor: color }}
        onClick={handleClick}
        className="number">{number}
    </button>
     
}

export default PlayNumber;
