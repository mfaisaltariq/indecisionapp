"use strict";

console.log("app running");

// JSX - JavaScript XML
var template = React.createElement(
  "p",
  null,
  "This is JSX from Babel23"
);

var element = document.getElementById("app");

ReactDOM.render(template, element);
