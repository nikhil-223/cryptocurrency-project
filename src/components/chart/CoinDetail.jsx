import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { addWatchItem, removeWatchItem } from "../../store/slices/WatchSlice";

const CoinDetail = () => {
	const dispatch = useDispatch();
	// const theme = useSelector((state) => {
	// 	return state.theme;
	// });
	const coins = useSelector((state) => {
		return state.coins.data;
	});
	const currentCoin = useSelector((state) => {
		return state.drop.crypto.currentCoin;
	});

	const currencySymbol = useSelector((state) => {
		return state.drop.currency.symbol;
	});
	const WatchList = useSelector((state) => {
		return state.watch.list;
	});
	localStorage.setItem("watchlist",JSON.stringify(WatchList));

    
	let coinDetails;
	if (coins[0] !== undefined) {
        coinDetails = coins.filter((item) => {
            return item.id === currentCoin;
		})[0];
	}
    let iconFilled=WatchList.filter((item)=>{
        return item.name===coinDetails.name
    })[0]
	const handleClick = () => {
		let found =WatchList.filter((item)=>{
			return item.name===coinDetails.name
		})[0]
		if (!found)
		dispatch(addWatchItem(coinDetails));
		else
		dispatch(removeWatchItem(coinDetails))
	};
	return (
		<>
			<div className="flex items-center gap-3">
				<div className="w-8">
					<img src={coinDetails.image} alt="logo" />
				</div>
				<span className=" text-lg">{coinDetails.name}</span>
				<span
					className="watchListIcon ml-auto w-5 text-lg"
					onClick={handleClick}>
					{iconFilled? <AiFillHeart /> : <AiOutlineHeart />}
				</span>
			</div>
			<div className="flex gap-3">
				<span>Symbol :</span>
				<span>{coinDetails.symbol}</span>
			</div>
			<div className="flex gap-3">
				<span>Current Price :</span>
				<span>
					{currencySymbol} {coinDetails.current_price}
				</span>
			</div>
			<div className="flex gap-3">
				<span>24h High :</span>
				<span>
					{currencySymbol} {coinDetails.high_24h}
				</span>
			</div>
			<div className="flex gap-3">
				<span>24h Low :</span>
				<span>
					{currencySymbol} {coinDetails.low_24h}
				</span>
			</div>
			<div className="flex items-center gap-3 text-base">
				<span>Rank:</span>
				<span>{coinDetails.market_cap_rank}</span>
			</div>
		</>
	);
};

export default CoinDetail;
