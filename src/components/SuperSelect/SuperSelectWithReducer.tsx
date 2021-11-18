import React, {KeyboardEvent, useReducer, useState} from 'react'
import styles from './SuperSelect2.module.css'
import {StoreType, toggleReducerType} from "../../stories/SuperSelect.stories";
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE'

export type ItemType = {
    title: string
    value: any
}
type selectPropsType = {
    value?: any
    onChange: (value: any) => void
    store: StoreType
    toggleReducer: toggleReducerType
}

// const initialState = {toogle: false}
// const toogleReducer = (state: any, action: any) => {
//     switch(action.type) {
//         case TOGGLE_ACTIVE:
//             return {toogle: !state.toogle}
//         default:
//             return {toogle: false}
//     }
// }

export const SuperSelectWithReducer:React.FC<selectPropsType> = ({toggleReducer, ...props}) => {

    const items = props.store.state.itemsList

    const [state, dispatch] = useReducer(toggleReducer, props.store.state)

    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)



    const selectedItem = items.find(i => i.value === props.value)
    const hoveredItem =  items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => {
        dispatch({ type: TOGGLE_ACTIVE })
    }

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
                newHoveredItem =  items[items.findIndex(el => el.value === hoveredElementValue)+1]
                newSelectedItem =  items[items.findIndex(el => el.value === hoveredElementValue)+1]
                applaySelectValue()
                return;
            case 'ArrowUp':
                newHoveredItem =  items[items.findIndex(el => el.value === hoveredElementValue)-1]
                newSelectedItem =  items[items.findIndex(el => el.value === hoveredElementValue)-1]
                applaySelectValue()
                return;
            case ('Enter' || 'Escape'):
                toggleItems()
                return;
            default:
                setHoveredElementValue(items[0].value)
                props.onChange(items[0].value)
        }
    }

    return (
        <div className={styles.select} onBlur={() => toggleItems()} onKeyUp={onKeyPressHandler} tabIndex={0}>
            <span className={styles.main}  onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                state.flags.active &&
                <div className={styles.items}>
                    {items.map(i => <div className={hoveredItem === i ? styles.item : ''}
                        key={i.value}
                        onClick={() => onItemClick(i.value)}
                        onMouseEnter={() => setHoveredElementValue(i.value)}
                    >{i.title}</div>)}
                </div>
            }
        </div>
    )
}