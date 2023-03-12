import React from "react";
import { Chart, Coins, Exchange, Portfolio } from "./components";

const App = () => {
	return (
		<>
			{/* for pc */}
			<div className="dashboard lg:grid sm:hidden md:hidden grid-rows-5 p-5 w-auto h-screen gap-1 grid-flow-col bg-sky-300">
				<div
					id="chart"
					className={`grid row-span-3 col-span-8 min-w-600 rounded-xl grid-rows-6 grid-cols-9 grid-flow-row gap-2 bg-boxDark text-white pt-2 p-5`}>
					<Chart />
				</div>
				<div
					id="portfolio"
					className={` row-span-2 col-span-4 p-4 min-w-fit rounded-xl grid grid-rows-6 grid-cols-1 gap-1 bg-boxDark text-white`}>
					<Portfolio />
				</div>
				<div
					id="exchange"
					className={`row-span-2 col-span-4 min-w-fit rounded-xl bg-boxDark text-white`}>
					<Exchange />
				</div>

				<div
					id="coins"
					className={` col-span-3 row-span-5 min-w-350 rounded-xl bg-boxDark text-white`}>
					<Coins />
				</div>
			</div>

			{/* for tablet  */}
			<div className="dashboard  lg:hidden sm:hidden md:grid grid-rows-10 grid-cols-2 p-5 w-full h-1500 gap-1 grid-flow-col bg-sky-300">
				<div
					id="chart"
					className={`grid row-span-4 col-span-2 rounded-xl grid-rows-6 grid-cols-9 grid-flow-row gap-2 bg-boxDark text-white pt-2 p-5`}>
					<Chart />
				</div>
				<div
					id="portfolio"
					className={` row-span-3 col-span-1 p-4 rounded-xl grid grid-rows-6 grid-cols-1 gap-1 bg-boxDark text-white`}>
					<Portfolio />
				</div>
				<div
					id="exchange"
					className={`row-span-3 col-span-1 rounded-xl bg-boxDark text-white`}>
					<Exchange />
				</div>

				<div
					id="coins"
					className={` row-span-6 col-span-1 rounded-xl bg-boxDark text-white`}>
					<Coins />
				</div>
			</div>

			{/* for phones */}
			<div className="dashboard  lg:hidden sm:grid md:hidden  grid-rows-10 grid-cols-2 p-0 w-full h-1500 gap-0 grid-flow-col bg-sky-300">
				<div
					id="chart"
					className={`grid row-span-4 col-span-2 grid-rows-6 grid-cols-9 grid-flow-row gap-2 bg-boxDark text-white pt-2 p-5`}>
					<Chart />
				</div>
				<div
					id="portfolio"
					className={` row-span-3 col-span-1 p-4 grid grid-rows-6 grid-cols-1 gap-1 bg-boxDark text-white`}>
					<Portfolio />
				</div>
				<div
					id="exchange"
					className={`row-span-3 col-span-1 bg-boxDark text-white`}>
					<Exchange />
				</div>

				<div
					id="coins"
					className={` row-span-6 col-span-1 bg-boxDark text-white`}>
					<Coins />
				</div>
			</div>
		</>
	);
};

export default App;
