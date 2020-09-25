import React from 'react';

const Action = (props) => (
    <div>
        <button 
            disabled={!props.hasOptions} 
            onClick={props.btnPickRandom}
        >
            What should I do?
        </button>
    </div>
)

export default Action;