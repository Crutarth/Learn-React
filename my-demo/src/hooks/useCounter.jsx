import { useState } from "react";

function useCounter(initialvalue=0) {
    const [count, setCount] = useState(initialvalue)
    
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(count - 1)
    }
    return {
        count, increment, decrement, reset
    }
}

export default useCounter