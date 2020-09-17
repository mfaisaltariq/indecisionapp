class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    reset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={this.addOne}>Add One</button>
            <button onClick={this.minusOne}>Minus One</button>
            <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));