import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import { BiSquareRounded } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
	setCryptoDropName,
} from "../../store/slices/DropSlice";
import { setSecondItemChartList } from "../../store/slices/ChartSlice";
import { useAppSelector } from "../../store/storeAccess";

const CryptoItem = (props) => {
	const { name,id } = props;
	const dispatch = useDispatch();
	const {theme,chartList,coins}=useAppSelector()
    let cryptofirstname=[]
    let cryptosecondname=[]
    
         coins.data.map((coin)=>{
            if(coin.id===chartList[0])
            cryptofirstname.push(coin)
            return 0
        })

	const handleClick = () => {
		dispatch(setSecondItemChartList(id));
        coins.data.map((coin)=>{
            if(coin.id===id){
                cryptosecondname.push(coin)
            }
            return 0
        })
		dispatch(setCryptoDropName(`${cryptofirstname[0].name}, ${cryptosecondname[0].name}`)); 
	};
	
    
	

	return (
		<div
			className={`p-2 flex items-center gap-2 ${
				theme === "dark"
					? "hover:bg-dropdownListItemDark"
					: "hover:bg-dropdownListItemLight"
			} cursor-pointer`}
			onClick={handleClick}>
			{chartList.includes(id) ? <BsCheck2Square /> : <BiSquareRounded />}
			{name.charAt(0).toUpperCase().concat(name.slice(1))}
		</div>
	);
};

export default CryptoItem;
