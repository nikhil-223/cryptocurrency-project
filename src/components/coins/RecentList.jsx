import React from "react";
import { useAppSelector } from "../../store/storeAccess";
import CoinItem from "./CoinItem";

const RecentList = () => {
	const {recentList,coins}=useAppSelector()
	
	return (
		<div className="coinlist pb-4 h-5/6 overflow-scroll">
			{coins.isLoading === false ? (
				recentList[0] ? (
					recentList.map((item, index) => {
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
						<span className=" px-10">you have not seen any coin recently</span>
					</div>
				)
			) : (
				<div className="w-full h-full flex justify-center items-center">
					<img className="w-28" src="https://i.gifer.com/yy3.gif" alt="" />
				</div>
			)}
		</div>
	);
};

export default RecentList;
