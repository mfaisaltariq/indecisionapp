"use strict";

console.log("app running");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Let the computer make decisions."
}
var template = ( 
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div> 
);

// var username = 'Faisal';
// var age = 25;
// var loc = 'Islamabad'

var user = {
    name: 'Faisal',
    age:    25,
    location: 'Islamabad'
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

var element = document.getElementById("app");

ReactDOM.render(template, element);
