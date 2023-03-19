import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSellCoin, setSellDropName } from "../../store/slices/DropSlice";

const SellListItem = (props) => {
	const dispatch = useDispatch();
	const { name } = props;
	const theme = useSelector((state) => {
		return state.theme;
	});
	const handleClick = () => {
		dispatch(setSellCoin(name));
		dispatch(setSellDropName(name));
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

export default SellListItem;
