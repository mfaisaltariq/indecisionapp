import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <h3>Indecision App</h3>
    )
}

const app = document.getElementById('app');

ReactDOM.render(<Header />, app);
