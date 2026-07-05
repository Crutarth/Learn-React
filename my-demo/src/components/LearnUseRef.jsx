import React, { useRef, useState } from 'react'

const LearnUseRef = () => {
    const [name, setName] = useState('')
    const refElement = useRef('')
    console.log(refElement);

    const previousName = useRef('') 

    const clearText = () => {
        setName("")
        refElement.current.focus()
    }

    const handleInput = (e) => {
        previousName.current = name
        setName(e.target.value)
    }

  return (
    <>
        <h2>Learn UseRef</h2>
        <input ref={refElement} type="text" value={name} onChange={handleInput}/> <span></span>
        <button onClick={clearText}>Clear</button><br />
        <p>Previous Name : {previousName.current}</p>
    </>
  )
}

export default LearnUseRef