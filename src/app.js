"use strict";

console.log("app running");

// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "Let the computer make decisions.",
    options: [],
    getListItems() {
        return this.options.map((item) => <li>Option {item}</li>)
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();
    app.options.push(e.target.elements.option.value);
    e.target.elements.option.value = '';
    renderApp();
}

const removeAllItems = () => {
    app.options = [];
    renderApp();
}

const element = document.getElementById("app");

const renderApp = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No Options'}</p>
            <ol>
                {app.getListItems()}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <button onClick={removeAllItems}>Remove All Items</button>
        </div> 
    );
    ReactDOM.render(template, element);
}

renderApp();



