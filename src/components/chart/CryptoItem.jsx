import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import { BiSquareRounded } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
	setCryptoDropName,
} from "../../store/slices/DropSlice";
import { setSecondItemChartList } from "../../store/slices/ChartSlice";

const CryptoItem = (props) => {
	const { name,id } = props;
	const dispatch = useDispatch();
	const theme = useSelector((state) => {
		return state.theme;
	});

	const chartList = useSelector((state) => {
		return state.chart.chartList;
	});
	const coins = useSelector((state) => {
		return state.coins.data;
	});
    let cryptofirstname=[]
    let cryptosecondname=[]
    
         coins.map((coin)=>{
            if(coin.id===chartList[0])
            cryptofirstname.push(coin)
            return 0
        })

	const handleClick = () => {
		dispatch(setSecondItemChartList(id));
        coins.map((coin)=>{
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
