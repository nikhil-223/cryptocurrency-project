import React from 'react'

const CurrencyItem = (props) => {
    const {itemname}=props;
  return (
    <div className='p-2 w-full bg-dropdownListItemDark'>{itemname.charAt(0).toUpperCase().concat(itemname.slice(1))}</div>
  )
}

export default CurrencyItem