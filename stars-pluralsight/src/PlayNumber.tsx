import React from 'react';
import './PlayNumber.css';
import { Colors } from './Colors';

interface PlayNumberProps {
    number: number;
    key: number;
    status: string;
}

const PlayNumber: React.FC<PlayNumberProps> = ({number, key, status}) => {
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

    return <button 
        key={number} 
        style={{ backgroundColor: color }}
        className="number">{number}
    </button>
     
}

export default PlayNumber;
