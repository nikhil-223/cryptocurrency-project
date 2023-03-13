import React,{useState} from 'react'
import CurrencyItem from './CurrencyItem'
import {IoMdArrowDropdown} from 'react-icons/io'

const CurrencyDrop = () => {
	const [dropdownName, setDropdownName] = useState('USD $')
    const arr = [{ itemname: "rahul" }, { itemname: "nikhil" }];
    const showList=()=>{
		const dropListState =
			document.getElementById("currencyDroplist").style.display;
			dropListState === "none"
				? (document.getElementById("currencyDroplist").style.display = "flex")
				: (document.getElementById("currencyDroplist").style.display = "none");
    }
	const handleChange=(e)=>{
		setDropdownName(e.target.value)
	}
  return (
		<div className="flex col-span-2 justify-between gap-2 px-2 py-2 h-xs rounded-lg bg-dropdownBoxDark text-white">
			<input
				type="text"
				className="drop-input  w-20 p-2 bg-transparent focus:outline-none "
				value={dropdownName}
				onChange={handleChange}
			/>
			<span
				className="w-6 flex justify-center items-center text-5xl"
				onClick={showList}>
				<IoMdArrowDropdown />
			</span>
			<div
				id="currencyDroplist"
				className="droplist absolute -translate-x-1 translate-y-12 bg-dropdownListDark w-28 h-48 flex-col rounded overflow-scroll"
				style={{ display: "none" }}>
				{arr.map((item) => {
					return <CurrencyItem key={item.itemname} itemname={item.itemname} />;
				})}
			</div>
		</div>
	);
}

export default CurrencyDrop