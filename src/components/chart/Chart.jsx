import React from 'react'
import CurrencyDrop from './CurrencyDrop'

const Chart = () => {
  return (
    <div id='chart' className={`grid row-span-3 col-span-6 rounded-xl grid-rows-6 grid-cols-8 grid-flow-col gap-2 bg-boxDark text-white`}>
      <CurrencyDrop/>
    </div>
  )
}

export default Chart