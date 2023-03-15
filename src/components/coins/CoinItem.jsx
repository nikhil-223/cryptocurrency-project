import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPieItem } from "../../store/slices/PieItemSlice";

const CoinItem = (props) => {
	const dispatch = useDispatch();
	const {
		name,
		current_price,
		market_cap_change_percentage_24h,
		image,
		symbol,
	} = props;

	const market_cap_change_percentage_24h_toString = `${market_cap_change_percentage_24h}`;

	const currencySymbol = useSelector((state) => {
		return state.currency.symbol;
	});

	const aboutItem = (e) => {
		let item = e.target
			.closest(".coinItem")
			.querySelector(".coinName").innerHTML;
		dispatch(addPieItem(item));
	};
	return (
		<>
			<div
				className="coinItem  cursor-pointer w-full h-auto py-4 px-6 flex justify-between"
				data-tracker={name}
				onClick={aboutItem}>
				{/* coin details  */}
				<div className="flex items-center gap-4">
					{/* coin image  */}
					<div className=" h-8 w-8 ">
						<img className="object-contain" src={image} alt="coinimg " />
					</div>
					{/* coin name and symbol  */}
					<div>
						<div className=" coinName text-md">{name}</div>
						<div className=" opacity-50">{symbol}</div>
					</div>
				</div>
				{/* coin details  */}

				{/* coin value and changes  */}
				<div className={`flex flex-col items-end`}>
					{/* coin value  */}
					<div>{`${currencySymbol} ${current_price}`}</div>
					{/* changes  */}
					<div
						className={
							market_cap_change_percentage_24h_toString.slice(0, 1) === "-"
								? ` text-red-500`
								: ` text-green-500`
						}>
						{market_cap_change_percentage_24h_toString.slice(0, 1) === "-"
							? ` ${market_cap_change_percentage_24h_toString} %`
							: `${"+".concat(market_cap_change_percentage_24h_toString)} %`}
					</div>
				</div>
				{/* coin value and changes  */}
			</div>
		</>
	);
};

export default CoinItem;
