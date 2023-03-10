import React from 'react'
import CurrencyItem from './CurrencyItem'
import {IoMdArrowDropdown} from 'react-icons/io'

const CurrencyDrop = () => {
    const arr = [{ itemname: "rahul" }, { itemname: "nikhil" }];
    const showList=()=>{
        document.getElementById("currencyDroplist").style.display='flex';
    }
  return (
		<div className="flex justify-between gap-2 px-2 py-2 m-1 rounded-lg bg-dropdownBoxDark text-white">
			<input type="text" className="drop-input w-4/5 bg-transparent " value='gg'/>
			<span className="w-1/5 flex justify-center items-center text-5xl" onClick={showList}>
				<IoMdArrowDropdown/>
			</span>
			<div id='currencyDroplist' className="droplist absolute translate-y-12 bg-slate-400 w-28 h-48 flex-col rounded overflow-scroll hidden">
				{arr.map((item) => {
					return <CurrencyItem key={item.itemname} itemname={item.itemname} />;
				})}
			</div>
		</div>
	);
}

export default CurrencyDrop