import React from "react";
import { useSelector } from "react-redux";
import { Chart, Coins, Exchange, Portfolio } from "./components";
import PhoneMenu from "./components/phoneMenu/PhoneMenu";

const App = () => {
	const theme = useSelector((state) => {
		return state.theme;
	});
	return (
		<>
			{/* for pc */}
			<div className="dashboard lg:grid sm:hidden md:hidden grid-rows-dashPc grid-cols-dashPc p-4 content-center justify-center w-auto h-screen gap-1 grid-flow-col bg-sky-300">
				<div
					id="chart"
					className={`grid row-span-1 col-span-2 min-w-600 rounded-lg grid-rows-6 grid-cols-9 grid-flow-row gap-2 ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"} pt-2 p-5`}>
					<Chart />
				</div>
				<div
					id="portfolio"
					className={` row-span-1 col-span-1 p-4 min-w-fit rounded-lg grid grid-rows-6 grid-cols-1 gap-1 ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"}`}>
					<Portfolio />
				</div>
				<div
					id="exchange"
					className={`row-span-1 w-full flex flex-col justify-between p-4 col-span-1 min-w-fit rounded-lg ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"}`}>
					<Exchange />
				</div>

				<div
					id="coins"
					className={` col-span-1 row-span-2 min-w-300 w-full rounded-lg  ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"}`}>
					<Coins />
				</div>
			</div>

			{/* for tablet  */}
			<div className="dashboard  lg:hidden sm:hidden md:grid grid-rows-dashTab grid-cols-dashTab p-0 w-full h-auto gap-1 grid-flow-col bg-dropdownBoxDark">
				<div
					id="chart"
					className={`grid row-span-1 col-span-2 grid-rows-6 grid-cols-9 grid-flow-row gap-2 ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"} pt-2 p-5`}>
					<Chart />
				</div>
				<div
					id="portfolio"
					className={` row-span-1 col-span-1 p-4 grid grid-rows-6 grid-cols-1 gap-1 ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"}`}>
					<Portfolio />
				</div>
				<div
					id="exchange"
					className={`row-span-1 w-full flex flex-col justify-between p-4 col-span-1 min-w-fit rounded-lg ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"}`}>
					<Exchange />
				</div>

				<div
					id="coins"
					className={` row-span-2 col-span-1 ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"}`}>
					<Coins />
				</div>
			</div>

			{/* for phones */}
			<div className="dashboard  lg:hidden sm:grid md:hidden  grid-rows-dashMob grid-cols-dashMob p-0 w-full h-93vh overflow-hidden gap-0 grid-flow-col bg-sky-300">
				<div className="fixed bottom-0">
					<PhoneMenu />
				</div>
				<div
					id="chart"
					className={` grid col-start-1 row-start-1 row-span-1 col-span-1 grid-rows-6 grid-cols-9 grid-flow-row gap-2 ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"} pt-2 p-5`}>
					<Chart />
				</div>
				<div
					id="portfolio"
					className={` col-start-1 row-start-1 p-4 w-full grid grid-rows-6 grid-cols-1 gap-1 ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"}`}>
					<Portfolio />
				</div>
				<div
					id="exchange"
					className={` col-start-1 row-start-1 w-full flex flex-col justify-between p-4 col-span-1 min-w-fit rounded-lg ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"}`}>
					<Exchange />
				</div>

				<div
					id="coins"
					className={` row-span-1 col-span-1 ${
						theme === "dark" ? "bg-boxDark" : "bg-boxLight"
					} ${theme === "dark" ? " text-textLight" : " text-textDark"}`}>
					<Coins />
				</div>
			</div>
		</>
	);
};

export default App;
