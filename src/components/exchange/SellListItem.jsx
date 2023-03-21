import React from "react";
import { useDispatch } from "react-redux";
import { setSellCoin, setSellDropName } from "../../store/slices/DropSlice";
import { useAppSelector } from "../../store/storeAccess";

const SellListItem = (props) => {
	const dispatch = useDispatch();
	const { name } = props;
	const {theme} = useAppSelector()
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
