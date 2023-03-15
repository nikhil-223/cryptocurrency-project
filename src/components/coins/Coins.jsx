import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CoinItem from "./CoinItem";
import {AiOutlineSearch} from "react-icons/ai"
import { MdLightMode, MdModeNight } from "react-icons/md";
import { setThemeDark } from "../../store/slices/ThemeSlice";
import { setThemeLight } from "../../store/slices/ThemeSlice";

const Coins = () => {
	
	const theme= useSelector((state)=>{
		return state.theme
	})

	const dispatch = useDispatch();
	const coins = useSelector((state) => {
		return state.coins.data;
	});
	

	const setMode=()=>{
		theme==='dark'?
		dispatch(setThemeLight('light')):
		dispatch(setThemeDark('dark'))
	}
	

	return (
		<>
			{/* title  */}
			<div className=" my-2 h-12 w-full flex items-center justify-start ">
				{/* search icon  */}
				<div className=" m-3 mx-5 text-xl">
					<AiOutlineSearch size={25} />
				</div>

				{/* input  */}
				<input
					className="h-full w-3/5 bg-transparent outline-none "
					type="text"
					placeholder="Search by Coin"
				/>

				{/* theme button */}

				{theme === "dark" ? (
					<div
						className=" ml-auto w-12 text-xl flex item-end bg-transparent text-fuchsia-600"
						onClick={setMode}>
						<MdLightMode size={30} />
					</div>
				) : (
					<div
						className=" ml-auto w-12 text-xl flex item-end bg-transparent text-black"
						onClick={setMode}>
						<MdModeNight size={30} />
					</div>
				)}
			</div>
			{/* title  */}

			{/* coinlist  */}
			<div className="coinlist pb-4 h-5/6 overflow-scroll">
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
		</>
	);
};

export default Coins;
