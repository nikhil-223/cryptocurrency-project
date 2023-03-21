import React from 'react'
import { useDispatch } from 'react-redux';
import { setChartType } from '../../store/slices/DropSlice';
import { useAppSelector } from '../../store/storeAccess';

const ChartType = (props) => {
    const {itemname}=props
     const {theme} = useAppSelector()
	const dispatch=useDispatch()
	const handleClick=(e)=>{
		dispatch(setChartType(itemname))
	}
  return (
		<div
			className={`p-2 ${
				theme === "dark"
					? "hover:bg-dropdownListItemDark"
					: "hover:bg-dropdownListItemLight"
			} cursor-pointer`}
			onClick={handleClick}>
			{itemname}
		</div>
	);
}

export default ChartType