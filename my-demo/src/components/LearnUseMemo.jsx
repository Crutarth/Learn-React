import { useMemo, useState } from "react";

const LearnUseMemo = () => {
    const [Count, setCount] = useState(0)
    const [Number, setNumber] = useState(1000)

    const countIncrease = () => {
        if(Count === 10){
            setNumber(999999)
        }
        setCount(Count + 1)
    }

    // const setOfNumbers = () => {
    //     let sum = 0
    //     for (let index = 1; index <= Number; index++) {
    //         sum += index
    //     }
    //     return sum
    // }

    const setOfNumbers = useMemo(() => {
        let sum = 0
        for (let index = 1; index <= Number; index++) {
            sum += index
        }
        return sum
    }, [Number])

    console.log(`Sum of Numbers from 1 to ${Number}:`, setOfNumbers);


  return (
    <>
        <h2>LearnUseMemo</h2>
        <h2>Count : {Count}</h2>
        <button onClick={countIncrease}>Increase</button>
    </>
  )
}

export default LearnUseMemo