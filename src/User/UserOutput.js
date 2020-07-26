import React from 'react';

import './UserOutput.css';

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p onClick={props.click}>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default userOutput;
