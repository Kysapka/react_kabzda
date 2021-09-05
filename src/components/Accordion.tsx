import React, {useState} from "react";

export type AccordionPropsType = {
    titleValue: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean

    // collapsed: boolean
}

export const Accordion = React.memo((props: AccordionPropsType) => {



    const setCollapsedHandler = () => {
        return props.setCollapsed(!props.collapsed)
    }

    return (
        <div>
            {/*<button onClick={() => setCollapsed(!collapsed)}>TOOGLE</button>*/}
            <AccordionTitle title={props.titleValue} setCollapsedHandler={setCollapsedHandler}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    )
})

type AccordionTitleType = {
    title: string
    setCollapsedHandler: () => void
}

const AccordionTitle = (props: AccordionTitleType) =>
    {
        return <h3 onClick={(e) => props.setCollapsedHandler()}>{props.title}</h3>
    }

const AccordionBody = () =>
    {
        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    }