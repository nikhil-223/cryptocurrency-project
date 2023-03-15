import React from "react";
import PhoneMenuItem from "./PhoneMenuItem";

// Importing icon from react-icons
import { AiFillHome } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { RiPieChart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const PhoneMenu = () => {
	
	//getting access of theme state from store 
	const theme=useSelector((state)=>{
		return state.theme
	})
	const phoneMenuItems = [
		{ itemName: "Home", icon: <AiFillHome /> }, // object for Home menu item
		{ itemName: "Markets", icon: <BsFillBarChartFill /> }, // object for Markets menu item
		{ itemName: "Exchange", icon: <FaCoins /> }, // object for Exchange menu item
		{ itemName: "Portfolio", icon: <RiPieChart2Fill /> }, // object for Portfolio menu item
	];
	return (
		<div
			// class name that determines background color and text color based on theme variable
			className={` bg-white flex p-2 py-3 w-screen justify-evenly bg-phoneMenu-${
				theme === "dark" ? "dark" : "light"
			} text-phoneMenu-${theme === "dark" ? "light" : "dark"}`}>
			{phoneMenuItems.map((item) => {
				return (
					<PhoneMenuItem
						key={item.itemName} // unique key for each menu item
						name={item.itemName} // name of the menu item
						icon={item.icon} // icon to be displayed for the menu item
					/>
				);
			})}
		</div>
	);
};

export default PhoneMenu;
