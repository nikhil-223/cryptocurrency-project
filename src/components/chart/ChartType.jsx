import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setChartType } from '../../store/slices/DropSlice';

const ChartType = (props) => {
    const {itemname}=props
     const theme = useSelector((state) => {
				return state.theme;
			});
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