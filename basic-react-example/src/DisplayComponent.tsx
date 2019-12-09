import React from 'react';

interface DisplayComponentProps{  
  message: string | number;  
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({ message }) => {
  return (
    <div>{message}</div>
  );
}

export default DisplayComponent;
