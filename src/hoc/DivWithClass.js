import React from 'react';

const DivWithClass = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default DivWithClass;