import React from 'react';

const useroutput = (props) => {
  if (props.username) {
    return (
      <div>
        <p>UserOutput Paragraph 1: {props.username}</p>
        <p>UserOutput Paragraph 2: {props.username}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p style={props.style}>Please type a username.</p>
      </div>
    );
  }
};

export default useroutput;
