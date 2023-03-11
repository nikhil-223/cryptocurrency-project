import React from 'react'
import PieChart from './PieChart';

const Portfolio = () => {
  return (
		<div id="portfolio" className={` row-span-2 col-span-4 p-4 rounded-xl grid grid-rows-6 grid-cols-1 gap-1 bg-boxDark text-white`} >
			<div className='flex justify-between items-center row-span-1 '>
				<div className=' text-lg font-bold'>Portfolio</div>
				<div>price:500$</div>
			</div>
			<div className=' row-span-5 '>
				<PieChart/>
			</div>
		</div>
	);
}

export default Portfolio