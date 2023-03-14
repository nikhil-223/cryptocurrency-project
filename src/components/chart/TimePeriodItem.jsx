import React from 'react'
import { useSelector } from 'react-redux';

const TimePeriodItem = (props) => {
    const {timePeriod}=props;
		const theme = useSelector((state) => {
			return state.theme;
		});
  return (
    <div className={`timePeriodItem flex justify-center items-center rounded w-11 h-9 ${theme==='dark' ? ' bg-timePeriodDark' : ' bg-timePeriodLight' } cursor-pointer`}>{timePeriod}</div>
  )
}

export default TimePeriodItem