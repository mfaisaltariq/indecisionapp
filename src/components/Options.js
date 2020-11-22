import React from 'react';
import Option from './Option';

const Options = props => {

    return (
        <div>
            <h3>Your Options:</h3>
            <button>Remove All</button>

            {props.options.length ===0 && <p>Add a new option to get started</p>}
            {
                props.options.map((option, index) => (
                    <Option 
                        index={index + 1}
                        text={option}
                    />
                ))
            }
        </div>
    )
}

export {Options as default}