import React from 'react'
import PieChart from './PieChart';

import {useSelector} from 'react-redux'

const Portfolio = () => {
	
const currencySymbol = useSelector((state) => {
	return state.drop.currency.symbol;
});
	  const PieItem=useSelector((state)=>{
		return state.pieItem
	  })
	  const coins=useSelector((state)=>{
		return state.coins.data;
	  })
	  let tv=0;
	
	 
	 coins[0] && PieItem.map((item)=>{
	
	 let found= coins.find(function (element) {
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
				{coins[0] && <PieChart/>}
			</div>
	</>
	);
}

export default Portfolio