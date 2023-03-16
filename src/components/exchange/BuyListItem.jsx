import React from "react";
import { useDispatch } from "react-redux";
import { setBuyCoin, setBuyDropName } from "../../store/slices/DropSlice";

const BuyListItem = (props) => {
	const dispatch = useDispatch();
	const { name } = props;
	const handleClick = () => {
		dispatch(setBuyCoin(name));
		dispatch(setBuyDropName(name));
	};
	return (
		<div className="p-2" onClick={handleClick}>
			{name}
		</div>
	);
};

export default BuyListItem;
