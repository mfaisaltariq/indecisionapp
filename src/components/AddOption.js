import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    btnAddOption = (e) => {
        e.preventDefault();
        const val = e.target.elements.option.value.trim();
        const error = this.props.btnAddOption(val);
        this.setState(() => ({ error }))
        e.target.elements.option.value = ""
    }
    render () {
        return (
            <div>
                {this.state.error && <p className="option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.btnAddOption}>
                    <input className="add-option__input" type='text' name='option'></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}