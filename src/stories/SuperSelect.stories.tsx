import {SuperSelect} from "../components/SuperSelect";
import {v1} from "uuid";
import {SuperSelect2} from "../components/SuperSelect2";
import {useState} from "react";
import {ItemType, SuperSelectWithReducer, TOGGLE_ACTIVE} from "../components/SuperSelectWithReducer";

export default {
    title: 'My Components/SuperSelect'
}

const data = [
    {id: v1(), value: 'Ivan'},
    {id: v1(), value: 'Artem'},
    {id: v1(), value: 'Viktor'},
    {id: v1(), value: 'Alex'}
]

const data2 = [
    {value: "1", title: 'Ivan'},
    {value: "2", title: 'Artem'},
    {value: "3", title: 'Viktor'},
    {value: "4", title: 'Alex'}
]

export type StateType = {
    itemsList: ItemType[]
    flags: {active: boolean}
}
export type StoreType = {
    state: StateType
}
export type toggleReducerType = (state: StateType, action: { type: string }) => StateType

const Store: StoreType = {
    state: {
        itemsList: [
            {value: "1", title: 'Ivan'},
            {value: "2", title: 'Artem'},
            {value: "3", title: 'Viktor'},
            {value: "4", title: 'Alex'}
        ],
        flags: {active: false}
    }
}

const toggleReducer: toggleReducerType = (state, action) => {
    switch (action.type) {
        case TOGGLE_ACTIVE:
            return {itemsList: [...state.itemsList], flags: {active: !state.flags.active}}
        default:
            throw new Error('DISPATCH ACTION type ERROR!!!')
    }
}

export const SuperSelectComponent = () => {
    return <SuperSelect title={'My super selector'} data={data}/>
}

export const SuperSelectComponentWithValue = () => {
    const [value, setValue] = useState('2')
    return <SuperSelect2 onChange={setValue} value={value} items={data2}/>
}

export const SuperSelectComponentWithOutValue = () => {
    const [value, setValue] = useState('')
    return <SuperSelect2 onChange={setValue} value={value} items={data2}/>
}

export const SuperSelectComponentWithReducer = () => {
    const [value, setValue] = useState('2')
    return <SuperSelectWithReducer onChange={setValue} value={value} store={Store} toggleReducer={toggleReducer}/>
}