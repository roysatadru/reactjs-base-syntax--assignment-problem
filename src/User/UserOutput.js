import React from 'react';

const userOutput = props => {
  return (
    <div>
      <p onClick={props.click}>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default userOutput;
