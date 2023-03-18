import React, { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLightMode, MdModeNight } from "react-icons/md";

import { setThemeDark } from "../../store/slices/ThemeSlice";
import { setThemeLight } from "../../store/slices/ThemeSlice";
import { setCoinSearchName, setSearchList } from "../../store/slices/DropSlice";
import CoinList from "./CoinList";
import WatchList from "./WatchList";
import RecentList from "./RecentList";

const Coins = () => {
	let location = useLocation();
	const dispatch = useDispatch();
	const theme = useSelector((state) => {
		return state.theme;
	});
	const coinSearchName = useSelector((state) => {
		return state.drop.coinSearch.dropName;
	});

	const coins = useSelector((state) => {
		return state.coins;
	});

	useEffect(() => {
		dispatch(setSearchList(coins.data));
	}, [dispatch, coins.data]);

	useEffect(() => {

		if (location.pathname === "/coins"){
			document.querySelector(".tracker").style.transform = "translate(0)";
		}else if (location.pathname === "/recent")
			document.querySelector(".tracker").style.transform = "translate(100%)";
		else if (location.pathname === "/watchlist")
			document.querySelector(".tracker").style.transform = "translate(200%)";
		else document.querySelector(".tracker").style.transform = "translate(0)";
	}, [location.pathname]);

	const setMode = () => {
		theme === "dark"
			? dispatch(setThemeLight("light"))
			: dispatch(setThemeDark("dark"));
	};

	const handleChange = (e) => {
		dispatch(setCoinSearchName(e.target.value));
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
			<div className=" my-2 h-12 border-b-2 border-gray-400 w-full flex items-center justify-start ">
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

			{/* list options  */}
			<div className="w-full h-10 flex flex-wrap">
				<Link
					className={`w-1/3 h-9 flex justify-center items-center cursor-pointer bg-transparent`}
					to="/coins">
					Market Coins
				</Link>
				<Link
					className={`w-1/3 h-9 flex justify-center items-center cursor-pointer bg-transparent`}
					to="/recent">
					Recently
				</Link>
				<Link
					className={`w-1/3 h-9 flex justify-center items-center cursor-pointer bg-transparen`}
					to="/watchlist">
					Watchlist
				</Link>
				<div className=" w-full h-1 ">
					<div
						className={`tracker w-1/3 ${
							theme === "dark" ? " bg-textLight" : "bg-textDark"
						}  h-full rounded-t-md`}></div>
				</div>
			</div>
			{/* list options  */}

			{/* coinlist  */}
			<Routes>
				<Route path="/" element={<CoinList />} />
				<Route path="/coins" element={<CoinList />} />
				<Route path="/recent" element={<RecentList />} />
				<Route path="/watchlist" element={<WatchList />} />
			</Routes>
			{/* coinlist  */}
		</>
	);
};

export default Coins;
