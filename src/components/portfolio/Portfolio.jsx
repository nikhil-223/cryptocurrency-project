import React from 'react'
import PieChart from './PieChart';
import { useAppSelector } from '../../store/storeAccess';

const Portfolio = () => {
	const {currencySymbol,PieItem,coins}=useAppSelector()
	

	  let tv=0;
	
	 
	 coins.data[0] && PieItem.map((item)=>{
	
	 let found= coins.data.find(function (element) {
			  return element.name === item;
		  });
		tv= tv + found.current_price
		return 0
	  })
  return (
	<>
		<div className='flex justify-between items-center row-span-1 '>
				<div className='ml-4 text-lg font-bold'>Portfolio</div>
				<div>Total Value : {currencySymbol} {Math.floor(tv)}</div>
			</div>
			<div className=' row-span-5 md:mr-12 lg:mr-0'>
				{coins.data[0] && <PieChart/>}
			</div>
	</>
	);
}

export default Portfolio