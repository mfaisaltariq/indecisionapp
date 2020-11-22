import React from 'react';

const Action = props => {

    return (
        <div>
            <button onClick={props.pickRandom}>What Should I do?</button>
        </div>
    );
}

export {Action as default}