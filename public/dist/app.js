"use strict";

console.log("app running");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Let the computer make decisions.",
    options: ['One', 'Two']
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item ",
            app.options[0]
        ),
        React.createElement(
            "li",
            null,
            "Item ",
            app.options[1]
        )
    )
);

// var username = 'Faisal';
// var age = 25;
// var loc = 'Islamabad'

var user = {
    name: 'Faisal',
    age: 15,
    location: 'Islamabad'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var element = document.getElementById("app");

ReactDOM.render(template, element);
