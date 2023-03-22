import React from "react";
import { useDispatch } from "react-redux";
import { setSellCoin, setSellDropName } from "../../store/slices/DropSlice";  // Importing Redux actions from DropSlice.js file
import { useAppSelector } from "../../store/storeAccess"; // Importing a custom Redux hook from storeAccess.js file


const SellListItem = (props) => {
	const dispatch = useDispatch(); // Initializing the Redux dispatch function
	const { name } = props; // Destructuring the 'name' prop passed from parent component
	const {theme} = useAppSelector() // Accessing the 'theme' state value from Redux store using custom hook 'useAppSelector'
	const handleClick = () => {
		dispatch(setSellCoin(name)); // Dispatching the 'setSellCoin' action with the 'name' value passed as argument
		dispatch(setSellDropName(name)); // Dispatching the 'setSellDropName' action with the 'name' value passed as argument
	};
	return (
		<div
			className={`p-2 ${
				theme === "dark"
					? "hover:bg-dropdownListItemDark"
					: "hover:bg-dropdownListItemLight"
			} `}
			onClick={handleClick}>
			{name}
		</div>
	);
};

export default SellListItem;  // Exporting the SellListItem component so that it can be used in other parts of the application
