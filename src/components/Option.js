import React from 'react';

const Option = props => (
    <div>
        <p>{props.index}. {props.text}</p>
        <button onClick={(e) =>{props.removeOne(props.text)}}>Remove</button>
    </div>
)

export {Option as default}