import React from 'react'

const LearnMapFunction = () => {
    const names = ["Ronaldo", "Messi", "Neymar", "Mbappe", "Haland"]
  return (
    <>
        <h2>Learn MapFunction</h2>
        <ul>
            {names.map((name, index) => (
                <li key={index}><h3>{name}</h3></li>
            ))}
        </ul>
    </>
  )
}

export default LearnMapFunction