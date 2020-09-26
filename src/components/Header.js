import React from 'react';

const Header = (props) => (
    <div className="header">
        <h1 className="title">{props.title}</h1>
        {props.subTitle && <h2 className="subtitle">{props.subTitle}</h2>}
    </div>
)

Header.defaultProps = {
    "title": "Indecision"
}

export default Header;