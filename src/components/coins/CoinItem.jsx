import React from "react";
import { useDispatch } from "react-redux";
import {
	setCryptoDropName,
	setCurrentCoin,
} from "../../store/slices/DropSlice";
import { addPieItem } from "../../store/slices/PieItemSlice";
import {
	addRecentCoin,
	removeRecentCoin,
} from "../../store/slices/RecentSlice";
import { useAppSelector } from "../../store/storeAccess";

const CoinItem = (props) => {
	const dispatch = useDispatch();
	const {currencySymbol,coins,recentList,chartList}=useAppSelector();
	const {
		name,
		current_price,
		market_cap_change_percentage_24h,
		image,
		symbol,
		id,
	} = props;

	const market_cap_change_percentage_24h_toString = `${market_cap_change_percentage_24h}`;

	let cryptofirstname = [];
	let cryptosecondname = [];

	const aboutItem = (e) => {
		dispatch(addPieItem(name));
		coins.data.map((coin) => {
			if (coin.id === id) cryptofirstname.push(coin);
			else if (coin.id === chartList[1]) {
				cryptosecondname.push(coin);
			}
			return 0;
		});
		dispatch(
			setCryptoDropName(
				`${cryptofirstname[0].name} ${cryptosecondname[0]?`,${cryptosecondname[0].name}`:""}`
			)
		);
		dispatch(setCurrentCoin(id));

		// recent item 
		let recentItem = coins.data.filter((item) => {
			return item.name === name;
		});
		let coinIndex = recentList.indexOf(recentItem[0]);
		if (coinIndex === -1) dispatch(addRecentCoin(recentItem[0]));
		else {
			dispatch(removeRecentCoin(recentItem[0]));
			dispatch(addRecentCoin(recentItem[0]));
		}
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
						<div className="flex items-center gap-1 text-phoneSpan">
							<span>{symbol}</span>
						</div>
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
