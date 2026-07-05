import React, { useState } from 'react'

const LearnConditionalRendering = () => {
    const [IsLoggedin, setIsloggedin] = useState(false)
    const [Status, setStatus] = useState(false)
  return (
    <>
        <h2>Learn Conditional Rendering</h2>

        {IsLoggedin ? (
            <h3>Welcome, User!</h3>
        ): (
            <h3>Please, Login</h3>
        )}

        {Status && (
            <h3>Show Data.</h3>
        )}
    </>
  )
}

export default LearnConditionalRendering