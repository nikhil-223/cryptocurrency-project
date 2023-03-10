import React from 'react'

const CoinItem = (props) => {
    const {itemname,title}=props
  return (<>
  <div className='coinitem'>
    <div className='p-2 bg-slate-600'>{itemname}</div>
    <div className='p-2 bg-slate-600'>{title}</div> 
  </div>
    
  </>)
}

export default CoinItem