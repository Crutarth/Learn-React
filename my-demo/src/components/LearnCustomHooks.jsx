import React from 'react'
import useCounter from '../hooks/useCounter'

const LearnCustomHooks = () => {
  const {count, increment, decrement, reset} = useCounter(5)
  return (
    <>
        <h2>Learn CustomHooks</h2>
        <h2>Count : {count}</h2>
        <button onClick={increment}>Increment</button> <span></span>
        <button onClick={decrement}>Decrement</button> <span></span>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default LearnCustomHooks