import React from 'react'
import { useDispatch } from 'react-redux';
import {
	setCurrency,
	setCurrencyDropdownName,
	setSymbol,
} from "../../store/slices/DropSlice";

const CurrencyItem = (props) => {

  const dispatch = useDispatch()
    const {currency,symbol}=props;
    const handleClick=(e)=>{
      dispatch(setSymbol(symbol))
      dispatch(setCurrency(currency))
      dispatch(setCurrencyDropdownName(e.target.innerHTML))
    }
  return (
    <div className='p-2 w-full cursor-pointer bg-dropdownListItemDark' onClick={handleClick}>{currency.charAt(0).toUpperCase().concat(currency.slice(1))} {`(${symbol})`}</div>
  )
}

export default CurrencyItem