import React from "react";
import { Chart, Coins, Exchange, Portfolio } from "./components";
import PhoneMenu from "./components/phoneMenu/PhoneMenu";

const App = () => {
	return (
		<>
		
			{/* for pc */}
			<div className="dashboard lg:grid sm:hidden md:hidden grid-rows-dashPc grid-cols-dashPc p-4 content-center justify-center w-auto h-screen gap-1 grid-flow-col bg-sky-300">
				<div
					id="chart"
					className={`grid row-span-1 col-span-2 min-w-600 rounded-lg grid-rows-6 grid-cols-9 grid-flow-row gap-2 bg-boxDark text-white pt-2 p-5`}>
					<Chart />
				</div>
				<div
					id="portfolio"
					className={` row-span-1 col-span-1 p-4 min-w-fit rounded-lg grid grid-rows-6 grid-cols-1 gap-1 bg-boxDark text-white`}>
					<Portfolio />
				</div>
				<div
					id="exchange"
					className={`row-span-1 col-span-1 min-w-fit rounded-lg bg-boxDark text-white`}>
					<Exchange />
				</div>

				<div
					id="coins"
					className={` col-span-1 row-span-2 min-w-350 w-full rounded-lg bg-boxDark text-white`}>
					<Coins />
				</div>
			</div>

			{/* for tablet  */}
			<div className="dashboard  lg:hidden sm:hidden md:grid grid-rows-dashTab grid-cols-dashTab p-0 w-full h-auto gap-1 grid-flow-col bg-dropdownBoxDark">
				<div
					id="chart"
					className={`grid row-span-1 col-span-2 grid-rows-6 grid-cols-9 grid-flow-row gap-2 bg-boxDark text-white pt-2 p-5`}>
					<Chart />
				</div>
				<div
					id="portfolio"
					className={` row-span-1 col-span-1 p-4 grid grid-rows-6 grid-cols-1 gap-1 bg-boxDark text-white`}>
					<Portfolio />
				</div>
				<div
					id="exchange"
					className={`row-span-1 col-span-1 bg-boxDark text-white`}>
					<Exchange />
				</div>

				<div
					id="coins"
					className={` row-span-2 col-span-1 bg-boxDark text-white`}>
					<Coins />
				</div>
			</div>

			{/* for phones */}
			<div className="dashboard  lg:hidden sm:grid md:hidden  grid-rows-dashMob grid-cols-dashMob p-0 w-full h-93vh overflow-hidden gap-0 grid-flow-col bg-sky-300">
			    <div className="fixed bottom-0"><PhoneMenu/></div>
				<div
					id="chart"
					className={` grid row-span-1 col-span-1 grid-rows-6 grid-cols-9 grid-flow-row gap-2 bg-boxDark text-white pt-2 p-5`}>
					<Chart />
				</div>
				<div
					id="portfolio"
					className={`fixed p-4 w-full h-350 grid grid-rows-6 grid-cols-1 gap-1 bg-boxDark text-white`}>
					<Portfolio />
				</div>
				<div
					id="exchange"
					className={`fixed p-4 w-full h-350  bg-boxDark text-white`}>
					<Exchange />
				</div>

				<div
					id="coins"
					className={` row-span-1 col-span-1 bg-boxDark text-white`}>
					<Coins />
				</div>

			</div>
		</>
	);
};

export default App;
