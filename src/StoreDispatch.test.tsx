import {ItemType} from "./components/SuperSelectWithReducer";

type StateType = {
    itemsList: ItemType[]
    flags: {active: boolean}
}
type StoreType = {
    state: StateType
    dispatch: (action: string, state: StateType) => StateType,
}

const Store: StoreType = {
    state: {
        itemsList: [
            {value: "1", title: 'Ivan'},
            {value: "2", title: 'Artem'},
            {value: "3", title: 'Viktor'},
            {value: "4", title: 'Alex'}
        ],
        flags: {active: false}
    },
    dispatch(action, state): StateType {
        switch (action) {
            case 'TOGGLE_ACTIVE':
                return {itemsList: [...this.state.itemsList], flags: {active: !this.state.flags.active}}
            default:
                throw new Error('DISPATCH ACTION type ERROR!!!')
        }
    }
}


test('STORE DISPATCH TEST', () => {

    let newState = Store.dispatch('TOGGLE_ACTIVE', Store.state)

    expect(newState.flags.active).toBe(true)
})

test('STORE DISPATCH TEST WITH ERROR', () => {
    expect(() => {Store.dispatch('FAKE_ACTIVE', Store.state)}).toThrowError()
})