import React from "react";
import { useSelector } from "react-redux";
import CoinItem from "./CoinItem";

const WatchList = () => {
	const WatchList = useSelector((state) => {
		return state.watch.list;
	});

	const coins = useSelector((state) => {
		return state.coins;
	});

	let watchlistData = [];
	WatchList.map((item) => {
		for (const element of coins.data) {
			if (element.name === item) watchlistData.push(element);
		}
		return 0
	});
	console.log(watchlistData);
	return (
		<div className="coinlist pb-4 h-5/6 overflow-scroll">
			{coins.isLoading === false ? (
				WatchList[0] ? (
					watchlistData.map((item, index) => {
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
					<div className="w-full h-full flex items-center justify-center">
						<span className=" px-10">there is no coin in your watchlist</span>
					</div>
				)
			) : (
				<div className="w-full h-full flex justify-center items-center">
					<img className="w-20" src="https://i.gifer.com/XOsX.gif" alt="" />
				</div>
			)}
		</div>
	);
};

export default WatchList;
