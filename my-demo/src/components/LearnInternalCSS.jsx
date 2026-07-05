import React from 'react'
import '../assets/css/style.css'

const LearnInternalCSS = () => {
    const style = {
        container : {
            backgroundColor : 'green',
            height: '100px',
            width: '100px'
        },

        h2Text : {
            fontSize: '40px',
            color: 'pink',
        }
    }
  return (
    <>

        <style>
            {`
                .container {
                    background-color : #00ff00;
                    height : 30px;
                    width : 250px
                }
            `}
        </style>
        <h2>Learn Internal CSS</h2>

        <p style={{fontSize:'20px', fontWeight:'600', color: 'white'}}>Hello, I'm Krutarth!</p>

        <div style={style.container}>
            <h2 style={style.h2Text}>CR7</h2>
        </div>

        <hr />
        <h2>Internal CSS</h2>
        <div className="container">
            <p>Ronaldo won the Worldcup 2026.</p>
        </div>

        <hr />
        <h2>External CSS</h2>
        <div className="bluebox">
            <p>I want to be just bloody successful.</p>
        </div>
    </>
  )
}

export default LearnInternalCSS