class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.deleteAll = this.deleteAll.bind(this);
        this.pickRandom = this.pickRandom.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            "title": "Indecision App",
            "subTitle": "Let the computer make decisions",
            "options": ["Work", "Sleep", "Excercise"]
        }
    }
    deleteAll () {
        this.setState(() => {
            return {
                "options": []
            }
        }) 
    }

    pickRandom() {
        const rand = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[rand])
    }

    addOption(option) {
        if (!option) {
            return "Enter a valid value."
        } else if (this.state.options.indexOf(option) > -1 ){
            return "Option already exists. Option a unique value."
        }
        this.setState((prevState) => {
            return {
                "options": prevState.options.concat([option])
            }
        })
    }
    render() {
        return (
            <div>
                <Header 
                    title={this.state.title} 
                    subTitle={this.state.subTitle}
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    pickRandom={this.pickRandom}
                />
                <Options 
                    options={this.state.options} 
                    removeOptions={this.deleteAll}
                /> 
                <AddOption addOption={this.addOption}/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
            <button disabled={!this.props.hasOptions} onClick={this.props.pickRandom}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.removeOptions}>Remove All</button>
                <div>{this.props.options.length > 0 ? "Options Are:" : "No Options"}</div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>) 
                } 
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }   
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    addOption(e) {
        e.preventDefault();
        const val = e.target.elements.option.value.trim();
        const error = this.props.addOption(val);
        this.setState(() => {
            return { error } 
        })
        // e.target.elements.option.value = ""
    }
    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type='text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));