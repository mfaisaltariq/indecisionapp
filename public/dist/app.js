"use strict";

console.log("app running");

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is JSX from Babel23"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Faisal"
    ),
    React.createElement(
        "p",
        null,
        "Age: 25"
    ),
    React.createElement(
        "p",
        null,
        "Location: Islamabad"
    )
);

var element = document.getElementById("app");

ReactDOM.render(templateTwo, element);
