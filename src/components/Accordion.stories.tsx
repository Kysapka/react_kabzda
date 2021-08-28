import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'My Components/Accordion',
    component: Accordion,
}

// New sintaxis
const Template:Story<AccordionPropsType> = (args ) => <Accordion {...args} />;

export const AccordionUnCollapsed = Template.bind({});

AccordionUnCollapsed.args ={
    'titleValue': 'Accordion UnCollapsed',
    'collapsed':  false,
    'setCollapsed': action('Accordion want to Collapsed')
}

export const AccordionCollapsed = Template.bind({});

AccordionCollapsed.args ={
    'titleValue': 'Accordion Collapsed',
    'collapsed':  true,
    'setCollapsed': action('Accordion want to UnCollapsed')
}


// Old sintaxis
export const AccordionChanging = () => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Accordion changing'} collapsed={collapsed} setCollapsed={setCollapsed}/>
}