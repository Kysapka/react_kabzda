import React, {useEffect, useState} from "react";


type PropsType = {}

const formatTime = (num: number) => num < 10?`0+${num}`:num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return <div>
        <span>{formatTime(date.getHours())}</span>
        :
        <span>{formatTime(date.getMinutes())}</span>
        :
        <span>{formatTime(date.getSeconds())}</span>
    </div>
}



