import React from "react";
import { useDispatch } from "react-redux";
import { setBuyCoin, setBuyDropName } from "../../store/slices/DropSlice";
import { useAppSelector } from "../../store/storeAccess";

const BuyListItem = (props) => {
	const dispatch = useDispatch();
	const { name } = props;
	const {theme} =useAppSelector()
	const handleClick = () => {
		dispatch(setBuyCoin(name));
		dispatch(setBuyDropName(name));
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

export default BuyListItem;
