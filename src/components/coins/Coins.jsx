import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { setThemeDark } from "../../store/slices/ThemeSlice";
import { setThemeLight } from "../../store/slices/ThemeSlice";
import { setCoinSearchName, setSearchList } from "../../store/slices/DropSlice";
import CoinList from "./CoinList";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import WatchList from "./WatchList";
import RecentList from "./RecentList";

const Coins = () => {
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
			<BrowserRouter>
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

				{/* list options  */}
				<div className="w-full h-8 flex">
					<Link
						className="w-1/3 flex justify-center items-center cursor-pointer bg-slate-800 h-full border-r-2"
						to="/coins">
						Market Coins
					</Link>
					<Link
						className="w-1/3 flex justify-center items-center cursor-pointer bg-slate-800 h-full border-r-2"
						to="/recent">
						Recently
					</Link>
					<Link
						className="w-1/3 flex justify-center items-center cursor-pointer bg-slate-800 h-full"
						to="/watchlist">
						Watchlist
					</Link>
				</div>
				{/* list options  */}

				{/* coinlist  */}
				<Routes>
					<Route path="/" element={<CoinList />}/>
					<Route path="/coins" element={<CoinList />}/>
					<Route path="/recent" element={<RecentList />}/>
					<Route path="/watchlist" element={<WatchList />}/>
				</Routes>
				{/* coinlist  */}
			</BrowserRouter>
		</>
	);
};

export default Coins;
