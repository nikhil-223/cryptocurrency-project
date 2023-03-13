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
	    setfirst()
		// eslint-disable-next-line
	}, [first]);

	return (
		<>
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
		</>
	);
};

export default Coins;
