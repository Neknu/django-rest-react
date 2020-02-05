import React, { useState, useEffect } from 'react';

const Numbers = () => {
    const [numbers, setNumbers] = useState(['one', 'two', 'three']);
    const [letters, setLetters] = useState(['a', 'b', 'c']);

    const addNumber = () => {
        setNumbers([...numbers,'four'])
    }

    const addLetter = () => {
        setLetters([...letters,'D'])
    }

    useEffect( () => {
        console.log("our use effect triggers only for both");
    }, [numbers, letters])

    return (
        <div>
            <h1>Numbers</h1>
            { numbers.map( num => {
                return <h4>{num}</h4>
            }) }
            <button onClick={addNumber}>add Number</button>
            { letters.map( ltr => {
                return <h4>{ltr}</h4>
            }) }
            <button onClick={addLetter}>add Letter</button>
        </div>
    )
}

export default Numbers;