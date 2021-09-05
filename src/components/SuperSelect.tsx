import React, {ChangeEvent, memo, MouseEventHandler, useState} from 'react'
import s from './SuperSelect.module.css'

type SuperSelectType = {
    title: string
    data: any[]
}

export const SuperSelect: React.FC<SuperSelectType> = React.memo( ({title, data, ...props}) => {


    const [collapsed, setCollapsed] = useState(false)
    const [selectedItem, setSelectedItem] = useState('select your item from list...')

    const setUncollapsed = (e : any) => {
        setCollapsed(false)
        // console.log('title clicked')
    }

    const selectItem = (e: any) => {
        setSelectedItem(e.target.outerText)
        console.log('item clicked')
        setCollapsed(true)
    }

    return (
        <div className={s.main}>

            <div>{title}</div>

            <div onClick={setUncollapsed} className={s.selectedItem}>{selectedItem}</div>
            {!collapsed && data.map(sel => {
                return (
                    <div onClick={selectItem} className={s.item} key={sel.id}>{sel.value}</div>
                )
            })}

        </div>
    )
})