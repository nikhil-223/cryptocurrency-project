import React from "react";
import PhoneMenuItem from "./PhoneMenuItem";

import { useSelector } from "react-redux";

const PhoneMenu = () => {
	
	//getting access of theme state from store 
	const theme=useSelector((state)=>{
		return state.theme
	})
	const phoneMenuItems =useSelector((state)=>{
		return state.drop.phoneMenu.phoneMenuList
	});
	return (
		<div
			// class name that determines background color and text color based on theme variable
			className={` shadow-phoneMenu flex h-14 w-screen justify-evenly ${
				theme === "dark" ? "bg-phoneMenuDark" : "bg-phoneMenuLight"
			} ${theme === "dark" ? " text-textLight" : "text-textDark"}`} style={{zIndex:'500'}}>
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
