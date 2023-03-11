import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import ChartType from './ChartType';
import CryptoItem from './CryptoItem';

import CurrencyDrop from './CurrencyDrop'
// import LineChart from './LineChart';
import TimePeriodItem from './TimePeriodItem'

const Chart = () => {
  const timeperiods=[
    {timePeriod:'1H'},
    {timePeriod:'1D'},
    {timePeriod:'1W'},
    {timePeriod:'1M'},
    {timePeriod:'6M'},
    {timePeriod:'1Y'},

  ]
  
    const arr = [{ itemname: "rahul" }, { itemname: "nikhil" }];

    const showCryptoList=()=>{
      const dropListState =
				document.getElementById("cryptoDroplist").style.display;
			dropListState === "none"
				? (document.getElementById("cryptoDroplist").style.display = "flex")
				: (document.getElementById("cryptoDroplist").style.display = "none");
    }

    const showChartList=()=>{
      const dropListState =
				document.getElementById("chartTypeDroplist").style.display;
			dropListState === "none"
				? (document.getElementById("chartTypeDroplist").style.display = "flex")
				: (document.getElementById("chartTypeDroplist").style.display = "none");
    }

  return (
		<div
			id="chart"
			className={`grid row-span-3 col-span-8 rounded-xl grid-rows-6 grid-cols-8 grid-flow-row gap-2 bg-boxDark text-white pt-2 p-5`}>
			{/* Currency Dropdown  */}
      <CurrencyDrop />
			{/* Currency Dropdown  */}

			{/* timePeriod  */}
			<div className=" col-span-4 flex justify-end items-center gap-2">
				{timeperiods.map((item,index) => {
          return <TimePeriodItem key={index} timePeriod={item.timePeriod} />;
				})}
			</div>
      {/* timePeriod  */}

			<div className=" col-span-3 flex items-center justify-end gap-4">
				
			  {/* crypto dropdown */}
        <div className="flex items-center justify-between  w-44 h-12 p-2 bg-dropdownBoxDark rounded-lg">
					<input
						type="text"
						className="drop-input w-4/5 p-2 bg-transparent focus:outline-none "
						value={"rahul"}
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
						value={"rahul"}
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
							return (
								<ChartType key={item.itemname} itemname={item.itemname} />
							);
						})}
					</div>

				</div>
				{/* chartType dropdown  */}
			</div>
      <div className=' col-span-8 row-span-5 bg-slate-300'>
        {/* <LineChart/> */}
      </div>
		</div>
	);
}

export default Chart