import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.optionIndex}. {props.optionText}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.btnRemoveOne(props.optionText)
            }}
        >
            Remove
        </button>
    </div>
)

export default Option;