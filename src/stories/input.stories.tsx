import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
  title: 'My Components/Input'
}

export const UncontrolledInput = () => <input />

export const TrackingValueOfUncontrolledInput = () => {

  let [value, setValue] = useState("")

  return <><input onChange={(event)=>{
    setValue(event.currentTarget.value)
  }}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPressByIccorrectMethod = () => {

  let [value, setValue] = useState("")

  return <><input id={"inpId"}/> <button onClick={(e)=> {
    const el = document.getElementById("inpId") as HTMLInputElement;
    setValue(el.value)
  }
  }>Save</button> - Actual value: {value}</>
}

export const GetValueOfUncontrolledInputByButtonPressByCreateRef = () => {
  let [value, setValue] = useState("")
  const inpRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inpRef.current as HTMLInputElement;
     setValue(el.value);
  }

  return <><input ref={inpRef}/> <button onClick={save}> Save </button> - Actual value: {value}</>
}

export const ControlledInputWithFixedValue = () => <input value={'hard value'}/>

export const ControlInput = () => {
  let [parentValue, setParentValue] = useState('')
  const setValue = function (e: ChangeEvent<HTMLInputElement>) {
    setParentValue(e.currentTarget.value)
    action('input changed')
  }
  return (
      <input value={parentValue} onChange={setValue}/>
  )
}

export const ControlCheckBox = () => {
  let [parentValue, setParentValue] = useState(false)
  const setValue = function (e: ChangeEvent<HTMLInputElement>) {
    setParentValue(e.currentTarget.checked)
    action('checkbox changed')
  }
  return (
      <input type={"checkbox"} checked={parentValue} onChange={setValue}/>
  )
}

export const ControlSelect = () => {
  let [parentValue, setParentValue] = useState<undefined | string>('2')

  const setValue = (event: ChangeEvent<HTMLSelectElement>) => {
    action('select changed')
    setParentValue(event.currentTarget.value)
  }

  return (
      <select onChange={setValue} value={parentValue}>
        <option value={'1'}>none</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Minsk</option>
        <option value={'4'}>New-York</option>
      </select>
  )
}