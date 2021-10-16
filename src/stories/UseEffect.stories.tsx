import React, {useEffect, useState} from 'react'

export  default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("simple example")

    useEffect(() => {
        console.log("useEffect");
        // api.getUsers().then('');
        // setInterval;
        // indexedDB;
        // document.getElementById;
        // document.title = "User";
    })

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}