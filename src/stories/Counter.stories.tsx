import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Counter',
}

const stylesForCounter = {
  marginRight: 30,
  color: 'red',
  fontSize: 50
}

const wrapperStyle = {
  display: 'flex'
}

const styleButton = {
  cursor: 'pointer',
  borderRadius: 20,
  border: 'green solid 1px',
  outline: 'none',
}

export function Counter() {
  let [Count, setCount] = useState<number>(1)

  const IncrementCounter = () => {
    setCount(++Count);
  }
  return (
      <div style={wrapperStyle}>
        <h1 style={stylesForCounter}>{Count}</h1>
        <button style={styleButton} onClick={IncrementCounter}>Increment Counter</button>
        <button style={styleButton} onClick={()=>setCount(1)}>Reset Counter</button>
      </div>
  )
}

