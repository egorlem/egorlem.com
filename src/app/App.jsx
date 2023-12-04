import React, { useEffect, useReducer } from 'react';
import './style.scss';

// l command 91 r command 93
// option 18
// i 73


function reducer(state, action) {
    switch (action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed_name': {
            return {
                name: action.nextName,
                age: state.age
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

const initialState = {
    91: ''
}

export const App = () => {
    console.log('with react')
    // const [state, dispatch] = useReducer(reducer, initialState);
    // return null

    const handleKeyDown = (event) => {
        const { keyCode } = event
        console.log(document.activeElement)
        console.log(typeof keyCode)
    }

    const nadleKeyUp = (event) => {
        console.log(event)
    }

    // useEffect(() => {
    //     setInterval(() => {
    //         console.log(document.activeElement);
    //     }, 500)
    // }, []);

    return (
        <div>
            <button
                onKeyDown={handleKeyDown}
                onKeyUp={nadleKeyUp}
                className='buttonKey'
            >
                option
            </button>
            <button
                onKeyDown={handleKeyDown}
                onKeyUp={nadleKeyUp}
                className='buttonKey'
            >
                command
            </button>
            <button
                onKeyDown={handleKeyDown}
                onKeyUp={nadleKeyUp}
                className='buttonKey'
            >
                i
            </button>
        </div>
    );
};
