import React, {useState} from 'react';
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff stories',
    component: OnOff,
}

export const OnOffFalse = () => {
    return <OnOff on={false} setOn={()=>{}}/>
}
export const OnOffTrue = () => {
    return <OnOff on={true} setOn={()=>{}}/>
}
export const OnOffUncontrolled = () => {
   let [on, setOn] = useState(false)
    return <OnOff on={on} setOn={setOn}/>
}