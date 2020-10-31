import React, {useState} from 'react'

const Header = (props) => {
    const [title] =  useState('Indicision App');
    const [subTitle] = useState(props.subTitle)
    return (
        <div>
            <h3>{title}</h3>
            <p>{subTitle}</p>
        </div>
    )
}

Header.defaultProps = {
    subTitle: "Let the Computer make decisions for you!"
}

export { Header as default }