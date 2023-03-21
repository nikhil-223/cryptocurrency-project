import React, { useEffect } from "react";
import CurrencyItem from "./CurrencyItem";
import { IoMdArrowDropdown } from "react-icons/io";
import { currencies } from "../../assets";
import { useDispatch } from "react-redux";
import {
	setCurrencyDropdownName,
	setCurrencyList,
} from "../../store/slices/DropSlice";
import { useAppSelector } from "../../store/storeAccess";

const CurrencyDrop = (props) => {
	const { theme } = props;

	const dispatch = useDispatch();
	const {currencyList,currencyDropName}=useAppSelector()

	useEffect(() => {
		dispatch(setCurrencyList(currencies));
		// eslint-disable-next-line
	}, []);
	const hideList = () => {
		document.getElementById("currencyDroplist").style.display = "none";
	};
	const showList = () => {
		document.getElementById("currencyDroplist").style.display = "flex";
	};
	const handleClick = () => {
		const dropListState =
			document.getElementById("currencyDroplist").style.display;
		dropListState === "none" ? showList() : hideList();
	};
	const handleChange = (e) => {
		dispatch(setCurrencyDropdownName(e.target.value));
		let rahul = currencies.filter((element) => {
			return element.currency
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});
		!rahul[0] || e.target.value === ""
			? dispatch(setCurrencyList(currencies))
			: dispatch(setCurrencyList(rahul));
	};

	const handleFocus = (e) => {
		showList();
		dispatch(setCurrencyDropdownName(e.target.value));
	};

	return (
		<div
			className={`dropdown flex col-span-2 justify-between  md:p-2 lg:p-2 sm:p-1 h-auto lg:rounded md:rounded sm:rounded ${
				theme === "dark" ? " bg-dropdownBoxDark" : " bg-dropdownBoxLight"
			} ${theme === "dark" ? " text-textLight" : "text-textDark"}`}>
			<input
				type="text"
				className="drop-input sm:px-1  lg:w-24 sm:w-16 md:w-24 bg-transparent focus:outline-none "
				value={currencyDropName}
				onChange={handleChange}
				onFocus={handleFocus}
			/>
			<span
				className="sm:w-5 flex justify-center items-center text-2xl cursor-pointer"
				onClick={handleClick}>
				<IoMdArrowDropdown />
			</span>
			<div
				id="currencyDroplist"
				className={`droplist absolute -translate-x-1 translate-y-12 ${
					theme === "dark" ? "bg-dropdownBoxDark" : "bg-dropdownBoxLight"
				}  w-28 h-48 flex-col rounded overflow-scroll`}
				style={{ display: "none" }}
				onMouseLeave={hideList}
				onClick={handleClick}>
				{currencyList
					? currencyList.map((item) => {
							return (
								<CurrencyItem
									key={item.currency}
									currency={item.currency}
									symbol={item.symbol}
								/>
							);
					  })
					: "loading..."}
			</div>
		</div>
	);
};

export default CurrencyDrop;
