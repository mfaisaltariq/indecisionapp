import React from 'react';

const Option = props => {
    return (
        <div>
            <p>{props.index}. {props.text}</p>
            <button onClick={props.removeOne}>Remove</button>
        </div>
    );
}

export {Option as default}