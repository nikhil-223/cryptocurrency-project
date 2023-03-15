import React from 'react'

const ChartType = (props) => {
    const {itemname}=props
  return (
    <div className='p-2 hover:bg-slate-800 cursor-pointer'>{itemname}</div>
  )
}

export default ChartType