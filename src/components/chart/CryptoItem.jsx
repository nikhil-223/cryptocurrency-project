import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import { BiSquareRounded } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
	setCryptoDropName, // Importing Redux actions from DropSlice.js file
} from "../../store/slices/DropSlice";
import { setSecondItemChartList } from "../../store/slices/ChartSlice"; // Importing Redux actions from ChartSlice.js file
import { useAppSelector } from "../../store/storeAccess"; // Importing a custom Redux hook from storeAccess.js file

const CryptoItem = (props) => {
	const { name,id } = props; // Destructuring the 'name' and 'id' props passed from parent component
	const dispatch = useDispatch();  // Initializing the Redux dispatch function
	const {theme,chartList,coins}=useAppSelector() // Accessing the 'theme', 'chartList', and 'coins' state values from Redux store using custom hook 'useAppSelector'
    let cryptofirstname=[]
    let cryptosecondname=[]
    
         coins.data.map((coin)=>{
            if(coin.id===chartList[0]) // If the 'id' of the coin in the 'coins' array matches the first element in 'chartList' array, add the coin to the 'cryptofirstname' array
            cryptofirstname.push(coin)
            return 0
        })

	const handleClick = () => {
		dispatch(setSecondItemChartList(id)); // Dispatching the 'setSecondItemChartList' action with the 'id' value passed as argument
        coins.data.map((coin)=>{
            if(coin.id===id){ // If the 'id' of the coin in the 'coins' array matches the 'id' passed as argument, add the coin to the 'cryptosecondname' array
                cryptosecondname.push(coin)
            }
            return 0
        })
		dispatch(setCryptoDropName(`${cryptofirstname[0].name}, ${cryptosecondname[0].name}`)); 
	};
	
    
	

	return (
		<div
			className={`p-2 flex items-center gap-2 ${
				theme === "dark"
					? "hover:bg-dropdownListItemDark"
					: "hover:bg-dropdownListItemLight"
			} cursor-pointer`}
			onClick={handleClick}>
			{chartList.includes(id) ? <BsCheck2Square /> : <BiSquareRounded />}
			{name.charAt(0).toUpperCase().concat(name.slice(1))}
		</div>
	);
};

export default CryptoItem; // Exporting the CryptoItem component so that it can be used in other parts of the application
