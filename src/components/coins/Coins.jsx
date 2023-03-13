import React from "react";
import CoinItem from "./CoinItem";
import {AiOutlineSearch} from "react-icons/ai"
import { MdLightMode } from "react-icons/md";

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
			<div className=" h-12 w-full flex items-center justify-start ">
				<div className=" m-3 text-xl"><AiOutlineSearch size={25}/></div>
				
				<input className="h-full w-3/5 bg-boxDark outline-none " type="text" placeholder="Search by Coin"/>
				
	             <div className=" ml-auto w-12 text-xl flex item-end bg-transparent text-fuchsia-600" >< MdLightMode size={30}/></div>
			</div> 
			<div className=" bg-slate-400 h-4/5 overflow-scroll ">
				{arr.map((item) => {
					return <CoinItem itemname={item.itemname} title={item.title} />;
				})}
			</div>
		</div>
	);
};

export default Coins;
