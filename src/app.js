"use strict";

console.log("app running");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Let the computer make decisions.",
    options: ['One', 'Two']
}
var template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options': 'No Options'}</p>
        <ol>
            <li>Item {app.options[0]}</li>
            <li>Item {app.options[1]}</li>
        </ol>
    </div> 
);

// var username = 'Faisal';
// var age = 25;
// var loc = 'Islamabad'

var user = {
    name: 'Faisal',
    age:    15,
    location: 'Islamabad'
}

function getLocation(location ) {
    if (location) {
        return <p>Location: {location}</p>
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var element = document.getElementById("app");

ReactDOM.render(template, element);
