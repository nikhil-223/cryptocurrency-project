import React from 'react'
import { Chart, Coins, Exchange, Portfolio } from './components'

const App = () => {
  return (
    <>
    <div id='dashboard' className='grid grid-rows-5 grid-cols-8 p-8 w-full h-screen gap-4 grid-flow-col'>
      <Chart/>
      <Portfolio/>
      <Exchange/>
      <Coins/>
    </div>
    </>
  )
}

export default App