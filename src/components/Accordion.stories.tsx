import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
}



export const AccordionUncollapsed = () => {
    return <Accordion titleValue={'Accordion UnCollapsed'} collapsed={false} setCollapsed={action('Accordion want to Collapsed')} />
}
export const AccordionCollapsed = () => {
    return <Accordion titleValue={'Accordion Collapsed'} collapsed={true} setCollapsed={action('Accordion want to UnCollapsed')} />
}
export const AccordionChanging = () => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Accordion changing'} collapsed={collapsed} setCollapsed={setCollapsed}/>
}