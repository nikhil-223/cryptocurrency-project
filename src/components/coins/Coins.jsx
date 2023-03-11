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
				<div className="flex item-center font-medium justify-start h-10 " ><AiOutlineSearch/><br /></div><div className="flex items-center font-medium justify-center">Search</div>
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
