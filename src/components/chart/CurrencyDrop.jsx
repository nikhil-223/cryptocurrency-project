import React,{useState} from 'react'
import CurrencyItem from './CurrencyItem'
import {IoMdArrowDropdown} from 'react-icons/io'
import { useSelector } from 'react-redux';

const CurrencyDrop = (props) => {

	const{theme}=props;

	const currencies = useSelector((state)=>{
		return state.currency.data
	})

	const [dropdownName, setDropdownName] = useState('USD $')
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
	const handleFocus=(e)=>{
		document.getElementById("currencyDroplist").style.display = "flex";
		setDropdownName(e.target.value)
	}
	
  return (
		<div
			className={`dropdown flex col-span-2 justify-between gap-2 px-2 py-2 h-xs rounded-lg ${
				theme === "dark" ? " bg-dropdownBoxDark" : " bg-dropdownBoxLight"
			} ${theme==='dark'? ' text-textLight':'text-textDark'}`}>
			<input
				type="text"
				className="drop-input  w-20 p-2 bg-transparent focus:outline-none "
				value={dropdownName}
				onChange={handleChange}
				onFocus={handleFocus}
			/>
			<span
				className="w-6 flex justify-center items-center text-5xl"
				onClick={showList}>
				<IoMdArrowDropdown />
			</span>
			<div
				id="currencyDroplist"
				className="droplist absolute -translate-x-1 translate-y-12 bg-dropdownListDark w-28 h-48 flex-col rounded overflow-scroll"
				style={{ display: "none" }}
				onMouseLeave={showList}>
				{currencies? currencies.map((item) => {
					return <CurrencyItem key={item} itemname={item} />;
				}):"loading..."
			}
			</div>
		</div>
	);
}

export default CurrencyDrop