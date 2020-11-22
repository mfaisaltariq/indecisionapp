import React, {useState } from 'react';
import Header from './Header'
import Action from './Action';
import Options from './Options';
import AddOptions from './AddOptions';
const IndecisionApp = () => {
    const [options, setOptions] = useState(['choice1', 'choice2']);
    const [selectedOption, setSelectedOption] = useState('');

    const pickRandom = () => {
        const rand = Math.floor(Math.random() * options.length);
        console.log(options[rand]);
        alert(options[rand])
    }

    const removeAll = () => {
        setOptions([])
    }

    const addNewOption = (option) => {
        if(!option){
            return "Enter a valid value";
        }
        else if (options.indexOf(option) >= 0){
            return "Option already added.";
        }
        else {
            setOptions([...options, option])
        }
    }

    return (
        <div>
            <Header />
            <Action pickRandom={pickRandom}/>
            <Options options={options} removeAll={removeAll}/>
            <AddOptions addNewOption={addNewOption}/>
        </div>
    )
}

export { IndecisionApp as default }