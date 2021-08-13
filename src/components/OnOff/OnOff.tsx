import React, {Dispatch, SetStateAction} from 'react';

export type OnOffPropsType = {
    on: boolean
    setOn: Dispatch<SetStateAction<boolean>>
}

export const OnOff = (props: OnOffPropsType) => {



    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offtyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }

    return <div>
        <div onClick={() => {props.setOn(true)}} style={onStyle}>On</div>
        <div onClick={() => {props.setOn(false)}} style={offtyle}>Off</div>
        <div style={indicatorStyle}></div>

    </div>
}