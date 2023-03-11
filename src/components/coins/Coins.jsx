import React from "react";
import CoinItem from "./CoinItem";

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
			<div className="h-12">title</div>
			<div className=" bg-slate-400 h-4/5 overflow-scroll">
				{arr.map((item) => {
					return <CoinItem itemname={item.itemname} title={item.title} />;
				})}
			</div>
		</div>
	);
};

export default Coins;
