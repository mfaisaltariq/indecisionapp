import React, {useState } from 'react';
import Header from './Header'
import Action from './Action';
import Options from './Options';
const IndecisionApp = () => {
    const [options, setOptions] = useState(['choice1', 'choice2']);
    const [selectedOption, setSelectedOption] = useState('');

    const pickRandom = () => {
        const rand = Math.floor(Math.random() * options.length);
        console.log(options[rand]);
        alert(options[rand])
    }

    return (
        <div>
            <Header />
            <Action pickRandom={pickRandom}/>
            <Options options={options}/>
        </div>
    )
}

export { IndecisionApp as default }