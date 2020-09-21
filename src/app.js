class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.btnRemoveAll = this.btnRemoveAll.bind(this);
        this.btnPickRandom = this.btnPickRandom.bind(this);
        this.btnAddOption = this.btnAddOption.bind(this);
        this.btnRemoveOne = this.btnRemoveOne.bind(this);
        this.state = {
            "title": "Indecision App",
            "subTitle": "Let the computer make decisions",
            "options": props.options
        }
    }

    componentWillMount() {
        console.log("Component Will Mount");
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
        if (prevState.options.length !== this.state.options.length){
            const optionArray = JSON.stringify(this.state.options)
            localStorage.setItem('options', optionArray);
        }
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }


    btnRemoveAll () {
        this.setState(() => ({ "options": [] }))
    }

    btnRemoveOne (optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    btnPickRandom() {
        const rand = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[rand])
    }

    btnAddOption(option) {
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
        return (
            <div>
                <Header 
                    subTitle={this.state.subTitle}
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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    "title": "Indecision"
}

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOptions} 
                onClick={props.btnPickRandom}
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
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.btnRemoveOne(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.btnAddOption = this.btnAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    btnAddOption(e) {
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
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));