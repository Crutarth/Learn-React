import React from 'react'

const h2Element = React.createElement('h2', null, 'Hello, React!')

const LearnJSX = () => {

    let name = 'Krutarth'

  return (
    <>
      {h2Element}
        <h2>Hello, {name}!</h2>
        <h2>Age: 25</h2>
        <h2 className="bg-primary">This is a styled heading</h2>
    </>
  )
}

export default LearnJSX