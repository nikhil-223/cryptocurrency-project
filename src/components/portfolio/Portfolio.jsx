import React from 'react'
import PieChart from './PieChart';

const Portfolio = () => {
  return (
	<>
		<div className='flex justify-between items-center row-span-1 '>
				<div className=' text-lg font-bold'>Portfolio</div>
				<div>price:500$</div>
			</div>
			<div className=' row-span-5 '>
				<PieChart/>
			</div>
	</>
	);
}

export default Portfolio