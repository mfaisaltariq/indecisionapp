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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.btnAddOption}>
                    <input type='text' name='option'></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}