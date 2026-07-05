import React from 'react'

// const LearnProps = (props) => {
//   return (
//     <>
//         <h2>LearnProps</h2>
//         <h2>Stock: {props.stock}</h2>
//         <h2>Price: {props.price}</h2>
//     </>
//   )
// }

const LearnProps = ({ stock, price }) => {
  return (
    <>
        <h2>LearnProps</h2>
        <h2>Stock: {stock}</h2>
        <h2>Price: {price}</h2>
    </>
  )
}

export default LearnProps