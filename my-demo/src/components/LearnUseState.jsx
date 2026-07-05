import React from 'react'

const LearnUseState = () => {
    const [count, setCount] = React.useState(0)
  return (
    <>
        <h2>LearnUseState</h2>
        <p>Count: {count}</p>
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <span> | </span>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <br />
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    </>
  )
}


// ------------------------------------------------------------------------


// const LearnUseState = () => {
//     const [num, setNum] = React.useState(5)
//     console.log(num);

//     const updateNum = () => {
//         setNum(num * 2);
//     };

//     const[stockPrice, setStockPrice] = React.useState({stock: "Tesla", price: 1000});

//     const updateStockPrice = () => {
//         setStockPrice(prevState => {
//             return {...prevState, price: prevState.price + 100}
//         }) 
//     };

//   return (
//     <>
//         <h2>LearnUseState</h2>
//         <p>Num: {num}</p>
//         <button onClick={updateNum}>
//             Click here
//         </button>
//         <hr />
//         <p>Another way to update state using a function</p>
//         <h2>Stock Price: {stockPrice.stock} - ${stockPrice.price}</h2>
//         <button onClick={updateStockPrice}>
//             Update Stock Price
//         </button>

//     </>
//   )
// }

export default LearnUseState