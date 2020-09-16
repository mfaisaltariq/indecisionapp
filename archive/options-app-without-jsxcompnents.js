"use strict";

console.log("app running");

// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "Let the computer make decisions.",
    options: [],
    getListItems() {
        return this.options.map((item) => <li key={item}>{item}</li>)
    }
}

const submitForm = (e) => {
    e.preventDefault();
    app.options.push(e.target.elements.option.value);
    e.target.elements.option.value = '';
    renderApp();
}

const removeAllItems = () => {
    app.options = [];
    renderApp();
}

const pickRandom = () => {
    const rand = Math.floor(Math.random() * app.options.length);
    alert (app.options[rand]);
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
            <button onClick={removeAllItems}>Remove All Items</button>
            <button disabled={app.options.length === 0} onClick={pickRandom}>What should I do?</button>
            <form onSubmit={submitForm}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div> 
    );
    ReactDOM.render(template, element);
}

renderApp();