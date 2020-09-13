"use strict";

console.log("app running");

// JSX - JavaScript XML
var template = ( 
    <div>
        <h1>Indecision App</h1>
        <p>This is JSX from Babel23</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div> 
);

var templateTwo = (
    <div>
        <h1>Faisal</h1>
        <p>Age: 25</p>
        <p>Location: Islamabad</p>
    </div>
)

var element = document.getElementById("app");

ReactDOM.render(templateTwo, element);
