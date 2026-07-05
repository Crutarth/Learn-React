import React from 'react'

const LearnEvents = () => {
    const handleClick = () => {
        console.log('Button clicked!')
    }

    const handleClickedAgain = () => {
        console.log('Clicked Again!')
    }
  return (
    <>
        <button onClick={handleClick}>Click here</button><br />
        <button onClick={handleClickedAgain}>Click again</button>
    </>
  )
}

export default LearnEvents