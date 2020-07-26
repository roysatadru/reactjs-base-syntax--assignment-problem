import React from 'react';

const userInput = props => {
  const style = {
    display: 'block',
    outline: 'none',
    margin: 'auto',
    padding: '8px 16px',
    font: 'inherit',
    color: '#555',
    border: '1px solid #7f5f6f',
    borderRadius: '5px'
  };

  return <input style={style} type="text" onChange={props.change} value={props.name} />;
};

export default userInput;
