import { createContext, useState } from 'react'
// import UploadImages from './components/UploadImages'
import LearnForms from './components/LearnForms'
// import HelloWorld from './components/HelloWorld'
// import LearnReact from './components/LearnReact'
// import LearnJSX from './components/LearnJSX'
// import LearnProps from './components/LearnProps'
// import LearnEvents from './components/LearnEvents'
// import LearnLiftingStateUp from './components/LearnLiftingStateUp'
// import LearnUseState from './components/LearnUseState'
// import LearnUseEffect from './components/LearnUseEffect'
// import LearnUseMemo from './components/LearnUseMemo'
// import LearnUseContext from './components/LearnUseContext'
// import Child from './components/Child'
// import LearnUseRef from './components/LearnUseRef'
// import LearnCustomHooks from './components/LearnCustomHooks'
// import LearnConditionalRendering from './components/LearnConditionalRendering'
// import LearnMapFunction from './components/LearnMapFunction'
// import LearnInternalCSS from './components/LearnInternalCSS'

const StockContext = createContext()

function App() {
  
  // let price = 1000
  let Stock = "Tesla"

  const getStock = (data) => {
    console.log('Getting stock data from API...')
    console.log('Stock data received from LearnLiftingStateUp component:', data)
  }

  return (
    <>
      <h2>App Components</h2>
      <hr />

      {/* <HelloWorld /> */}
      {/* <hr /> */}

      {/* <h2><LearnReact /></h2> */}
      {/* <hr /> */}

      {/* <LearnJSX /> */}
      {/* <hr /> */}

      {/* <LearnProps stock="Apple" price={price} /> */}
      {/* <hr /> */}

      {/* <LearnEvents /> */}
      {/* <hr /> */}

      {/* <LearnLiftingStateUp getStock={getStock} /> */}
      {/* <hr /> */}

      {/* <LearnUseState /> */}
      {/* <hr /> */}

      {/* <LearnUseEffect /> */}
      {/* <hr /> */}

      {/* <LearnUseMemo /> */}
      {/* <hr /> */}

      {/* <LearnUseContext /> */}

      {/* <Child /> */}
      {/* <hr /> */}

      {/* <LearnUseRef /> */}
      {/* <hr /> */}

      {/* <LearnCustomHooks /> */}
      {/* <hr /> */}

      {/* <LearnConditionalRendering /> */}
      {/* <hr /> */}

      {/* <LearnMapFunction /> */}
      {/* <hr /> */}

      {/* <LearnInternalCSS /> */}
      {/* <hr /> */}

      {/* <UploadImages /> */}
      {/* <hr /> */}

      <LearnForms />
      {/* <hr /> */}
    </>
  )
}

export default App
export {StockContext}