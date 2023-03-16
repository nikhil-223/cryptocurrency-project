import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoinItem from "./CoinItem";
import {AiOutlineSearch} from "react-icons/ai"
import { MdLightMode, MdModeNight } from "react-icons/md";
import { setThemeDark } from "../../store/slices/ThemeSlice";
import { setThemeLight } from "../../store/slices/ThemeSlice";
import { setCoinSearchName, setSearchList } from "../../store/slices/DropSlice";

const Coins = () => {
	
	const dispatch = useDispatch();
	const theme= useSelector((state)=>{
		return state.theme
	})
	const coinSearchName= useSelector((state)=>{
		return state.drop.coinSearch.dropName
	})
	const searchList= useSelector((state)=>{
		return state.drop.coinSearch.searchList
	})

	const coins = useSelector((state) => {
		return state.coins
	});

	useEffect(() => {
		 dispatch(setSearchList(coins.data));
	}, [dispatch,coins.data])
	

	const setMode=()=>{
		theme==='dark'?
		dispatch(setThemeLight('light')):
		dispatch(setThemeDark('dark'))
	}
	
	const handleChange = (e) => {
		dispatch(setCoinSearchName(e.target.value))
		let rahul = coins.data.filter((element) => {
			return element.name.toLowerCase().includes(e.target.value.toLowerCase());
		});
		!rahul[0] || e.target.value === ""
			? dispatch(setSearchList(coins.data))
			: dispatch(setSearchList(rahul)); 
	};

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
					value={coinSearchName}
					onChange={handleChange}
				/>

				{/* theme button */}

				{theme === "dark" ? (
					<div
						className=" ml-auto w-12 text-xl flex item-end bg-transparent text-fuchsia-600 cursor-pointer"
						onClick={setMode}>
						<MdLightMode size={30} />
					</div>
				) : (
					<div
						className=" ml-auto w-12 text-xl flex item-end bg-transparent text-textDark cursor-pointer"
						onClick={setMode}>
						<MdModeNight size={30} />
					</div>
				)}
			</div>
			{/* title  */}

			{/* coinlist  */}
			<div className="coinlist pb-4 h-5/6 overflow-scroll">
				{coins.isLoading === false  ? (
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
			{/* coinlist  */}
		</>
	);
};

export default Coins;
