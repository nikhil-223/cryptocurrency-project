import React from 'react'

const TimePeriodItem = (props) => {
    const {timePeriod}=props;
  return (
    <div className='flex justify-center items-center rounded w-11 h-10 bg-slate-500 '>{timePeriod}</div>
  )
}

export default TimePeriodItem