import React from "react";
import {ClockViewPropsType} from "./Clock";

const formatTime = (num: number) => num < 10 ? `0+${num}` : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{formatTime(date.getHours())}</span>
        :
        <span>{formatTime(date.getMinutes())}</span>
        :
        <span>{formatTime(date.getSeconds())}</span>
    </>
}