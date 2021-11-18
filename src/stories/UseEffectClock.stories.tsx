import React from 'react'
import {Clock} from "../components/Clock/Clock";

export  default {
    title: 'Clock demo'
}

export const ClockAnalogExample = () => {
    return <Clock mode={"analog"}/>
}

export const ClockDigitalExample = () => {
    return <Clock mode={"digital"}/>
}