import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button 
            className="button button--link"
            disabled={!props.options.length > 0}
            onClick={props.btnRemoveAll}
        >
            Remove All
        </button>
        <div>
            {props.options.length > 0 ? "Options Are:" : "No Options"}
        </div>
        {
            props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option}
                    btnRemoveOne={props.btnRemoveOne}
                />
            ))
        } 
    </div>
)

export default Options;