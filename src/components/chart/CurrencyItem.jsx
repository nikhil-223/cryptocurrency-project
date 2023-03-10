import React from 'react'

const CurrencyItem = (props) => {
    const {itemname}=props;
  return (
    <div className='p-1 w-full '>{itemname}</div>
  )
}

export default CurrencyItem