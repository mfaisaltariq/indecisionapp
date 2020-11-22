import React, {useState, useEffect} from 'react';

const AddOption = (props) => {
    const [error, setError] = useState(undefined);

    useEffect(() => console.log(error), [error])

    const addNewOption = (e) => {
        e.preventDefault();
        const val = e.target.elements.option.value.trim();
        const err = props.addNewOption(val);
        if (err){
            setError(err);
        }
        e.target.elements.option.value = ""
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={addNewOption}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
        </div>
    )
}

export {AddOption as default}