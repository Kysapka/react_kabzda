import React, {useEffect, useState} from 'react'

export  default {
    title: 'useEffectAsync demo'
}

export const useEffectAsyncExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("simple example")

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log("Document title has changed")
    //         document.title = counter.toString()
    //     }, 1000)
    // })

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])


    return <>
        Hello, Counter - {counter}, fake-  {fake}
        {/*<button onClick={() => setCounter(counter + 1)}>Counter+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>Fake+</button>*/}
    </>
}