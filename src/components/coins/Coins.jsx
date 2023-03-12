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
				<div className=" m-3 p-3"><AiOutlineSearch/></div><div className="p-8 m-1 h-50 w-50 justify-start ">Search</div>
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
