import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'

export default class IndecisionApp extends React.Component {
    state =  {
        options: []
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            if (json) {
                const options = JSON.parse(json);
    
                this.setState(() => ({options}))
            }
        } catch (e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.options.length !== this.state.options.length || prevState.options.length === 0){
            const optionArray = JSON.stringify(this.state.options)
            console.log("did mount called");
            localStorage.setItem('options', optionArray);
        }
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }


    btnRemoveAll = () => {
        this.setState(() => ({ "options": [] }))
    }

    btnRemoveOne = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    btnPickRandom = () => {
        const rand = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[rand])
    }

    btnAddOption = (option) => {
        if (!option) {
            return "Enter a valid value."
        } else if (this.state.options.indexOf(option) > -1 ){
            return "Option already exists. Option a unique value."
        }
        this.setState((prevState) => ({
            "options": prevState.options.concat([option])
        }));

    }
    render() {
        const subtitle = "Let the computer make decisions."
        return (
            <div>
                <Header 
                    subTitle={subtitle}
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    btnPickRandom={this.btnPickRandom}
                />
                <Options 
                    options={this.state.options} 
                    btnRemoveAll={this.btnRemoveAll}
                    btnRemoveOne={this.btnRemoveOne}
                /> 
                <AddOption btnAddOption={this.btnAddOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    "options": []
}