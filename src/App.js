import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chart, Coins, Exchange, Portfolio } from "./components";
import { getCoins } from "./api";

const App = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => {
		return state.coins;
	});
	console.log(data);

	useEffect(() => {
		dispatch(getCoins());
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<div
				id="dashboard"
				className="grid grid-rows-5 grid-cols-11 p-5 w-full h-screen gap-1 grid-flow-col bg-sky-300">
				<Chart />
				<Portfolio />
				<Exchange />
				<Coins />
			</div>
		</>
	);
};

export default App;
