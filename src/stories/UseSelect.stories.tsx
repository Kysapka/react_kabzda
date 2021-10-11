import React, {useMemo, useState} from 'react'; // 0

export default {
    title: 'useState demo'
}

function generateData() {
    // difficult counting
    console.log("generateData")
    return 1;
}

export const Example1 = () => {
    console.log("Example1");

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData); // [0, function(newValue){}]

    // const changer = (state: number) => state + 1

    return <>
    <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}