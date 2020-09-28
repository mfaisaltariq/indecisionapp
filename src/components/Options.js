import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options:</h3>
            <button 
                className="button button--link"
                disabled={!props.options.length > 0}
                onClick={props.btnRemoveAll}
            >
                Remove All
            </button>
            </div>
            {props.options.length === 0 && <p className="widget__empty">Please add an option to get started</p>}
        {
            props.options.map((option, index) => (
                <Option 
                    key={option} 
                    optionText={option}
                    optionIndex={index + 1}
                    btnRemoveOne={props.btnRemoveOne}
                />
            ))
        } 
    </div>
)

export default Options;