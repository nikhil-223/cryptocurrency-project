import React from "react";
import CoinItem from "./CoinItem";
import {AiOutlineSearch} from "react-icons/ai"

const Coins = () => {
	const arr = [
		{ itemname: "rahul", title: "jj" },
		{ itemname: "rahul", title: "jj" },
		{ itemname: "rahul", title: "jj" },
		{ itemname: "rahul", title: "jj" },
		{ itemname: "rahul", title: "jj" },
		{ itemname: "rahul", title: "jj" },
		{ itemname: "rahul", title: "jj" },
		{ itemname: "rahul", title: "jj" },
		{ itemname: "rahul", title: "jj" },
		{ itemname: "rahul", title: "jj" },
		{ itemname: "rahul", title: "jj" },
		{ itemname: "rahul", title: "jj" },
	];
	return (
		<div
			id="coins"
			className={` col-span-2 row-span-5 rounded-xl bg-boxDark text-white`}>
			<div className="h-12">
				<div className="flex item-start grid font-medium justify-start h-90 w-44 " ><AiOutlineSearch/></div><div className="flex items-center font-medium justify-center h-11 drop-shadow-sm">Search</div>
	             <div></div>
			</div>
			<div className=" bg-slate-400 h-4/5 overflow-scroll">
				{arr.map((item) => {
					return <CoinItem itemname={item.itemname} title={item.title} />;
				})}
			</div>
		</div>
	);
};

export default Coins;
