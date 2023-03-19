import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBuyCoin, setBuyDropName } from "../../store/slices/DropSlice";

const BuyListItem = (props) => {
	const dispatch = useDispatch();
	const { name } = props;
	const theme = useSelector((state) => {
		return state.theme;
	});
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
