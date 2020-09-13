"use strict";

console.log("app running");

// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "Let the computer make decisions.",
    options: ['One', 'Two'],
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

// var username = 'Faisal';
// var age = 25;
// var loc = 'Islamabad'

const user = {
    name: 'Faisal',
    age:    15,
    location: 'Islamabad'
}

const getLocation = (location ) => {
    if (location) {
        return <p>Location: {location}</p>
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

const element = document.getElementById("app");

ReactDOM.render(template, element);
