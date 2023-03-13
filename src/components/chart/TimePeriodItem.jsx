import React from 'react'

const TimePeriodItem = (props) => {
    const {timePeriod}=props;
  return (
    <div className='flex justify-center items-center rounded w-11 h-9 bg-dropdownBoxDark cursor-pointer'>{timePeriod}</div>
  )
}

export default TimePeriodItem