import React from 'react';

interface IncrementorButtonProps {
  onClick: (increment: number) => void;
  increment: number;
}

const IncrementorButton: React.FC<IncrementorButtonProps> = ({onClick, increment}) => {
  const handleClick = () => onClick(increment);
  return (
    <button onClick={handleClick}>+{increment}</button>
  );
}

export default IncrementorButton;
