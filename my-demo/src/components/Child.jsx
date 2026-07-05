import React from 'react'
import { StockContext } from "../App";

const Child = () => {
    const stockData = React.useContext(StockContext)
  return (
    <>
        <h2>Child</h2>
        <h2>Child - {stockData.Stock}</h2>
    </>
  )
}

export default Child