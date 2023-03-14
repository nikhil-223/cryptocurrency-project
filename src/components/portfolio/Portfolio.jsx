import React from 'react'
import PieChart from './PieChart';

import {useSelector} from 'react-redux'

const Portfolio = () => {
	const coins=useSelector((state)=>{
		return state.coins.data;
	  })
  return (
	<>
		<div className='flex justify-between items-center row-span-1 '>
				<div className='ml-4 text-lg font-bold'>Portfolio</div>
				<div>price:500$</div>
			</div>
			<div className=' row-span-5 mr-12'>
				{coins[0] && <PieChart/>}
			</div>
	</>
	);
}

export default Portfolio