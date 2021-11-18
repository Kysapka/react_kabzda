import React, {KeyboardEvent, useState} from 'react'
import styles from './SuperSelect2.module.css'

type ItemType = {
    title: string
    value: any
}
type selectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}
export const SuperSelect2 = (props: selectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem =  props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        let newHoveredItem : ItemType;
        let newSelectedItem: ItemType;

        const applaySelectValue = () => {
            newHoveredItem && setHoveredElementValue(newHoveredItem.value)
            newSelectedItem && props.onChange(newSelectedItem.value)
        }
        switch (event.key) {
            case 'ArrowDown':
                newHoveredItem =  props.items[props.items.findIndex(el => el.value === hoveredElementValue)+1]
                newSelectedItem =  props.items[props.items.findIndex(el => el.value === hoveredElementValue)+1]
                applaySelectValue()
                return;
            case 'ArrowUp':
                newHoveredItem =  props.items[props.items.findIndex(el => el.value === hoveredElementValue)-1]
                newSelectedItem =  props.items[props.items.findIndex(el => el.value === hoveredElementValue)-1]
                applaySelectValue()
                return;
            case ('Enter' || 'Escape'):
                toggleItems()
                return;
            default:
                setHoveredElementValue(props.items[0].value)
                props.onChange(props.items[0].value)
        }
    }

    return (
        <div className={styles.select} onBlur={() => setActive(false)} onKeyUp={onKeyPressHandler} tabIndex={0}>
            <span className={styles.main}  onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i => <div className={hoveredItem === i ? styles.item : ''}
                        key={i.value}
                        onClick={() => onItemClick(i.value)}
                        onMouseEnter={() => setHoveredElementValue(i.value)}
                    >{i.title}</div>)}
                </div>
            }
        </div>
    )
}