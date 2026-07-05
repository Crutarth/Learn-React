import React from 'react'
import { useState, useEffect } from 'react'

const LearnUseEffect = () => {

    const [Count, setCount] = useState(0)
    const [RandomNum, setRandomNum] = useState(0)

    const increaseCount = () => {
        setCount(Count + 1)
    }

    const generateRandomNum = () => {
        setRandomNum(Math.floor(Math.random() * 100))
    }

    useEffect( () => {
        console.log("UseEffect Called!");

        return () => {
            console.log("Cleanup Method automatically called!");
        }
    }, [])

  return (
    <>
        <h2>LearnUseEffect Component</h2>
        <h3>Count : {Count}</h3>
        <button onClick={increaseCount}>Increase Count</button>
        <hr />
        <h3>Random Num : {RandomNum}</h3>
        <button onClick={generateRandomNum}>Random Number</button>
    </>
  )
}

export default LearnUseEffect