import React from 'react'
import { useDispatch } from 'react-redux'
import { setCryptoDropName, setCurrentCoin } from '../../store/slices/ChartSlice'

const CryptoItem = (props) => {
    const {name}=props
    const dispatch= useDispatch();
    const handleClick=(e)=>{
        dispatch(setCurrentCoin(e.target.innerHTML))
        dispatch(setCryptoDropName(e.target.innerHTML))
    }

    return (
    <div className='p-2 hover:bg-slate-800 cursor-pointer' onClick={handleClick} >{name.charAt(0).toUpperCase().concat(name.slice(1))}</div>
  )
}

export default CryptoItem