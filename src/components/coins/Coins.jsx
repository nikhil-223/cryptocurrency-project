import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../../api";
import CoinItem from "./CoinItem";

const Coins = () => {

	const dispatch = useDispatch();
	const coins = useSelector((state) => {
		return state.coins.data;
	});
 
	const [first, setfirst] = useState("")
	useEffect(() => {
		dispatch(getCoins());
		// eslint-disable-next-line
	}, [first]);

	return (
		<div
			id="coins"
			className={` col-span-3 row-span-5 rounded-xl bg-boxDark text-white`}>
			
			<div className="h-12">title</div>
			<div className="coinlist py-4 h-5/6 overflow-scroll">
				{coins? coins.map((item,index) => {
					return <CoinItem key={index} name={item.name} 
			current_price={item.current_price}
			market_cap_change_percentage_24h={item.market_cap_change_percentage_24h}
			image={item.image}
			symbol={item.symbol} />;
				}):"loading..." 
			}
			</div>

		</div>
	);
};

export default Coins;
