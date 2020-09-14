"use strict";

console.log("app running");

// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "Let the computer make decisions.",
    options: ['One', 'Two', 'Three'],
    getListItems() {
        return this.options.map((item) => <li>Item {item}</li>)
    }
}
const template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options': 'No Options'}</p>
        <ol>
            {app.getListItems()}
        </ol>
    </div> 
);

let num = 0;

const addOne = () => {
    num++;
    renderApp();
}

const minusOne = () => {
    num--;
    renderApp();
}

const reset = () => {
    num = 0;
    renderApp();
}


const element = document.getElementById("app");

const renderApp = () => {
    const templateTwo = (
        <div>
            <h1>{num}</h1>
            <button onClick={addOne}>Counter++</button>
            <button onClick={minusOne}>Counter--</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, element);
}

renderApp();
