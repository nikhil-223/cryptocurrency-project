import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTimePeriod } from '../../store/slices/DropSlice';

const TimePeriodItem = (props) => {
    const {timePeriod}=props;
		const theme = useSelector((state) => {
			return state.theme;
		});

    const dispatch=useDispatch()
    const handleClick=()=>{
      let time
      switch (timePeriod) {
        case '1D':
          time=1
          break;
        case '1W':
          time=7
          break;
        case '1M':
          time=31
          break;
        case '6M':
          time=182
          break;
        case '1Y':
          time=365
          break;
        default:
          time=1
          break;
      }
      dispatch(setTimePeriod(time))
    }
  return (
    <div className={`timePeriodItem flex justify-center items-center rounded w-11 h-9 ${theme==='dark' ? ' bg-timePeriodDark' : ' bg-timePeriodLight' } cursor-pointer`} onClick={handleClick}>{timePeriod}</div>
  )
}

export default TimePeriodItem