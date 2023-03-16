import React from 'react'
import { useDispatch } from 'react-redux'
import { setSellCoin, setSellDropName } from '../../store/slices/DropSlice'

const SellListItem = (props) => {
  const dispatch=useDispatch()
  const {name}=props
  const handleClick=()=>{
    dispatch(setSellCoin(name))
    dispatch(setSellDropName(name))
  }
  return (
    <div className='p-2' onClick={handleClick}>{name}</div>
  )
}

export default SellListItem