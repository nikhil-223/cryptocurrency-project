import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../../api";
import CoinItem from "./CoinItem";
import {AiOutlineSearch} from "react-icons/ai"
import { MdLightMode } from "react-icons/md";

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
		<div
			id="coins"
			className={` col-span-2 row-span-5 rounded-xl h-full bg-boxDark text-white`}>
			{/* title  */}
			<div className=" my-2 h-12 w-full flex items-center justify-start ">
				{/* search icon  */}
				<div className=" m-3 text-xl">
					<AiOutlineSearch size={25} />
				</div>

				{/* input  */}
				<input
					className="h-full w-3/5 bg-boxDark outline-none "
					type="text"
					placeholder="Search by Coin"
					/>

				{/* theme button */}
				<div className=" ml-auto w-12 text-xl flex item-end bg-transparent text-fuchsia-600">
					<MdLightMode size={30} />
				</div>
			</div>
			{/* title  */}

			{/* coinlist  */}
			<div className="coinlist py-4 h-5/6 overflow-scroll">
				{coins
					? coins.map((item, index) => {
						return (
								<CoinItem
									key={index}
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
								: "loading..."}
			</div>
			{/* coinlist  */}
		</div>
	);
};

export default Coins;
