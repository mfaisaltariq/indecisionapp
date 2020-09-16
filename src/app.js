class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App'
        const subTitle = "Let the computer make decisions"
        let options = ['Make Tea', 'Play Fifa']
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/> 
                <AddOption />
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
    pickRandom() {
        alert("Pick some random option")
    }
    render() {
        return (
            <div>
            <button onClick={this.pickRandom}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
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
    addOption(e) {
        e.preventDefault();
        const val = e.target.elements.option.value.trim();
        if(val) {
            alert(val);
        }
    }
    render () {
        return (
            <form onSubmit={this.addOption}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));