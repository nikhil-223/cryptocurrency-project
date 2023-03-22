import React from 'react'
import { useDispatch } from 'react-redux';
import { setChartType } from '../../store/slices/DropSlice';
import { useAppSelector } from '../../store/storeAccess';

// Define a functional component called ChartType that takes in a prop called itemname
const ChartType = (props) => {
	// Destructure the itemname prop from the props object
    const {itemname}=props
	// Use the useAppSelector hook from react-redux to access the theme state from the store
     const {theme} = useAppSelector()
	 // Use the useDispatch hook from react-redux to get a reference to the store's dispatch function
	const dispatch=useDispatch()
	 // Define a handleClick function that will dispatch the setChartType action with the itemname argument
	const handleClick=(e)=>{
		dispatch(setChartType(itemname))
	}
	// Render a div element that will display the itemname prop value and respond to clicks by calling the handleClick function
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
// Export the ChartType component as the default export of this module
export default ChartType