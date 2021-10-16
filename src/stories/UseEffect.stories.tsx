import React, {useEffect, useState} from 'react'

export  default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("simple example")

    useEffect(() => {
        console.log("useEffect exery render");
        document.title = counter.toString()
        // api.getUsers().then('');
        // setInterval;
        // indexedDB;
        // document.getElementById;
        // document.title = "User";
    })
    useEffect(() => {
        console.log("useEffect first render (analog ComponentDidMount)");
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("useEffect first render and when counter change");
        document.title = counter.toString()
    },[counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
    </>
}