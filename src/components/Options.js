import React from 'react';
import Option from './Option';

const Options = props => (
    <div>
        <h3>Your Options:</h3>
        <button onClick={props.removeAll}>Remove All</button>

        {props.options.length ===0 && <p>Add a new option to get started</p>}
        {
            props.options.map((option, index) => (
                <Option 
                    key={option}
                    index={index + 1}
                    text={option}
                />
            ))
        }
    </div>
)

export {Options as default}