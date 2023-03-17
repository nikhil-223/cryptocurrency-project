import React from "react";
import { useSelector } from "react-redux";
import CoinItem from './CoinItem'

const CoinList = () => {
	const searchList = useSelector((state) => {
		return state.drop.coinSearch.dropList;
	});

	const coins = useSelector((state) => {
		return state.coins;
	});
	return (
		<div className="coinlist pb-4 h-5/6 overflow-scroll">
			{coins.isLoading === false ? (
				searchList.map((item, index) => {
					return (
						<CoinItem
							key={index}
							id={item.id}
							name={item.name}
							current_price={item.current_price}
							market_cap_change_percentage_24h={
								item.market_cap_change_percentage_24h
							}
							image={item.image}
							symbol={item.symbol}
						/>
					);
				})
			) : (
				<div className="w-full h-full flex justify-center items-center">
					<img className="w-20" src="https://i.gifer.com/XOsX.gif" alt="" />
				</div>
			)}
		</div>
	);
};

export default CoinList;
