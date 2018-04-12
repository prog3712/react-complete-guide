import React from 'react';

import './UserInput.css';

const userinput = (props) => {
  return (
    <div className='UserInput'>
      <p>Username:</p>
      <input type='text' onChange={props.changed} value={props.username} placeholder='Your username...'/>
    </div>
  )
};

export default userinput;
