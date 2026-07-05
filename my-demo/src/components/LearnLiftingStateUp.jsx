import React from 'react'

const LearnLiftingStateUp = (props) => {

    const handleClick = () => {
        let stock = 'Apple'
        console.log('Button clicked in LearnLiftingStateUp component!')
        props.getStock(stock)
    }

  return (
    <>
        <h2>LearnLiftingStateUp</h2>
        <button onClick={handleClick}>Click here</button>
    </>
  )
}

export default LearnLiftingStateUp