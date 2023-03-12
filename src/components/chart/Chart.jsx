import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import { getChartData } from "../../api";
import ChartType from "./ChartType";
import CryptoItem from "./CryptoItem";
import CurrencyDrop from "./CurrencyDrop";
import LineChart from "./LineChart";
import TimePeriodItem from "./TimePeriodItem";

const Chart = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getChartData());
		// eslint-disable-next-line
	}, []);

	const chartData = useSelector((state) => {
		return state.chart.data;
	});

	const timeperiods = [
		{ timePeriod: "1D" },
		{ timePeriod: "1W" },
		{ timePeriod: "1M" },
		{ timePeriod: "6M" },
		{ timePeriod: "1Y" },
	];

	const arr = [{ itemname: "rahul" }, { itemname: "nikhil" }];

	const showCryptoList = () => {
		const dropListState =
			document.getElementById("cryptoDroplist").style.display;
		dropListState === "none"
			? (document.getElementById("cryptoDroplist").style.display = "flex")
			: (document.getElementById("cryptoDroplist").style.display = "none");
	};

	const showChartList = () => {
		const dropListState =
			document.getElementById("chartTypeDroplist").style.display;
		dropListState === "none"
			? (document.getElementById("chartTypeDroplist").style.display = "flex")
			: (document.getElementById("chartTypeDroplist").style.display = "none");
	};
	const [cryptoInput, setCryptoInput] = useState("Bitcoin");
	const [chartTypeInput, setChartTypeInput] = useState("Line");
	const handleCryptoChange = (e) => {
		setCryptoInput(e.target.value);
	};
	const handleChartTypeChange = (e) => {
		setChartTypeInput(e.target.value);
	};

	return (
		<>
			{/* Currency Dropdown  */}
			<div className=" col-span-2 flex justify-start items-center gap-2">
				<CurrencyDrop />
			</div>
			{/* Currency Dropdown  */}

			{/* timePeriod  */}
			<div className="lg:flex md:hidden sm:hidden col-span-3 justify-end items-center gap-2">
				{timeperiods.map((item, index) => {
					return <TimePeriodItem key={index} timePeriod={item.timePeriod} />;
				})}
			</div>
			<div className="lg:hidden md:flex sm:hidden col-span-1 col-start-9 row-start-2 flex-col row-span-5  justify-center items-center gap-3">
				{timeperiods.map((item, index) => {
					return <TimePeriodItem key={index} timePeriod={item.timePeriod} />;
				})}
			</div>
			<div className="lg:hidden md:hidden sm:flex col-span-9 col-start-1 row-start-6 justify-center items-center gap-4">
				{timeperiods.map((item, index) => {
					return <TimePeriodItem key={index} timePeriod={item.timePeriod} />;
				})}
			</div>
			
			{/* timePeriod  */}

			<div className=" lg:col-span-4 md:col-span-7 sm:col-span-6 sm:col-start-4 flex items-center justify-end gap-4 sm:gap-1 lg:gap-4">
				{/* crypto dropdown */}
				<div className="flex items-center justify-between  w-44 h-12 p-2 bg-dropdownBoxDark rounded-lg">
					<input
						type="text"
						className="drop-input w-4/5 p-2 bg-transparent focus:outline-none "
						value={cryptoInput}
						onChange={handleCryptoChange}
					/>
					<span
						className="w-1/5 flex justify-center items-center text-2xl"
						onClick={showCryptoList}>
						<IoMdArrowDropdown />
					</span>

					<div
						id="cryptoDroplist"
						className="droplist absolute bg-dropdownListDark -translate-x-1 translate-y-32 w-36 h-48 flex-col rounded overflow-scroll"
						style={{ display: "none" }}>
						{arr.map((item) => {
							return (
								<CryptoItem key={item.itemname} itemname={item.itemname} />
							);
						})}
					</div>
				</div>
				{/* crypto dropdown */}

				{/* chartType dropdown  */}
				<div className="flex items-center justify-between  w-44 h-12 p-2 bg-dropdownBoxDark rounded-lg">
					<input
						type="text"
						className="drop-input w-4/5 p-2 bg-transparent focus:outline-none "
						value={chartTypeInput}
						onChange={handleChartTypeChange}
					/>
					<span
						className="w-1/5 flex justify-center items-center text-2xl"
						onClick={showChartList}>
						<IoMdArrowDropdown />
					</span>

					<div
						id="chartTypeDroplist"
						className="droplist absolute bg-dropdownListDark -translate-x-1 translate-y-32 w-36 h-48 flex-col rounded overflow-scroll"
						style={{ display: "none" }}>
						{arr.map((item) => {
							return <ChartType key={item.itemname} itemname={item.itemname} />;
						})}
					</div>
				</div>
				{/* chartType dropdown  */}
			</div>
			<div className=" w-full col-span-9 md:col-span-8 sm:row-start-2 sm:col-start-1 sm:row-span-4 lg:col-span-9 md:row-span-5 ">
				{chartData && <LineChart />}
			</div>
		</>
	);
};

export default Chart;
