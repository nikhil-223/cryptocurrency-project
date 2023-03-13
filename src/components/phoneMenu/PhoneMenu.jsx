import React, { useState } from 'react'
import PhoneMenuItem from './PhoneMenuItem';
import { AiFillHome } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { RiPieChart2Fill } from "react-icons/ri";

const PhoneMenu = () => {
    let theme="dark";
    const [phoneMenuItems, setPhoneMenuItems] = useState([
			{ itemName: "Home", icon: <AiFillHome /> },
			{ itemName: "Markets", icon: <BsFillBarChartFill /> },
			{ itemName: "Exchange", icon: <FaCoins /> },
			{ itemName: "Portfolio", icon: <RiPieChart2Fill /> },
		]);
  return (
		<div
			className={` bg-white flex p-2 py-3 w-screen justify-evenly bg-phoneMenu-${
				theme === "dark" ? "dark" : "light"
			} text-phoneMenu-${theme === "dark" ? "light" : "dark"}`}>
			{phoneMenuItems.map((item) => {
				return (
					<PhoneMenuItem
						key={item.itemName}
						name={item.itemName}
						icon={item.icon}
					/>
				);
			})}
		</div>
	);
}

export default PhoneMenu