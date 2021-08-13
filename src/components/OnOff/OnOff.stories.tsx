import React, {useState} from 'react';
import {OnOff, OnOffPropsType} from "./OnOff";
import {Story} from "@storybook/react";
import {UnControlledRating} from "../Rating/UnControlledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'My Components/OnOff stories',
    component: OnOff,
}

const Template:Story<OnOffPropsType> = (args) => <OnOff {...args}/>

export const OnOffFalse = Template.bind({})

OnOffFalse.args = {
    'on' : false,
    setOn: action('OnOff want to change value')
}

// export const OnOffFalse = () => {
//     return <OnOff on={false} setOn={()=>{}}/>
// }
export const OnOffTrue = () => {
    return <OnOff on={true} setOn={()=>{}}/>
}
export const OnOffUncontrolled = () => {
   let [on, setOn] = useState(false)
    return <OnOff on={on} setOn={setOn}/>
}