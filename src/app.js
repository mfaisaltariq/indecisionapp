class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.deleteAll = this.deleteAll.bind(this);
        this.pickRandom = this.pickRandom.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            "title": "Indecision App",
            "subTitle": "Let the computer make decisions",
            "options": []
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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOptions} 
                onClick={props.pickRandom}
            >
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button 
                disabled={!props.options.length > 0}
                onClick={props.removeOptions}
            >
                Remove All
            </button>
            <div>
                {props.options.length > 0 ? "Options Are:" : "No Options"}
            </div>
            {
                props.options.map((option) => <Option key={option} optionText={option}/>) 
            } 
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    )
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
        e.target.elements.option.value = ""
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