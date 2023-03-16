import React from 'react'
import { useSelector } from 'react-redux';

const ChartType = (props) => {
    const {itemname}=props
     const theme = useSelector((state) => {
				return state.theme;
			});
  return (
		<div
			className={`p-2 ${
				theme === "dark"
					? "hover:bg-dropdownListItemDark"
					: "hover:bg-dropdownListItemLight"
			} cursor-pointer`}>
			{itemname}
		</div>
	);
}

export default ChartType