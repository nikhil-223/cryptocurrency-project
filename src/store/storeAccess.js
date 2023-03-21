
import { useSelector } from "react-redux";

export const useAppSelector = () => {
	const {
		drop: {
			currency: {
				currency,
				symbol: currencySymbol,
				dropList: currencyList,
				dropName: currencyDropName,
			},
			crypto: { dropName: cryptoDropName, dropList: cryptoList, currentCoin },
			chartType: { dropName: chartType },
			timePeriod: { time: timePeriod, range: chartRange, timePeriodList },
			sell: { dropName: sellDropName, dropList: sellList, coin: sellCoin },
			buy: { dropName: buyDropName, dropList: buyList, coin: buyCoin },
			coinSearch: {dropName: coinSearchName , dropList: searchList, },
			phoneMenu: { phoneMenuList: phoneMenuItems, path: phoneMenuPath },
		},
		alert,
		theme,
		chart: { chartList},
		coins,
		phone:{chartDisplay},
		watch: { list: WatchList },
		recent: recentList,
		pieItem: PieItem,
	} = useSelector((state) => state);

    const chart= useSelector(state=>state.chart)
    
		const firstchartitem = chartList[0];
		const secondchartitem = chartList[1];

	return {
		currency,
		alert,
		theme,
		cryptoDropName,
		cryptoList,
		chartType,
		chartDisplay,
		firstchartitem,
		secondchartitem,
		timePeriod,
		currentCoin,
		timePeriodList,
		chart,
		coins,
		currencySymbol,
		WatchList,
		currencyList,
		currencyDropName,
		chartRange,
		recentList,
		chartList,
		searchList,
		coinSearchName,
		sellDropName,
		sellList,
		sellCoin,
		buyDropName,
		buyList,
		buyCoin,
		phoneMenuItems,
		phoneMenuPath,
		PieItem,
	};
};





// import { useSelector } from "react-redux";

// export const useAppSelector = () => {

// 	const currency = useSelector((state) => state.drop.currency.currency);
//     const currencySymbol = useSelector((state) => state.drop.currency.symbol);
//     const currencyList = useSelector((state) => state.drop.currency.dropList);
//     const currencyDropName = useSelector((state) => state.drop.currency.dropName);

// 	const cryptoDropName = useSelector((state) => state.drop.crypto.dropName);
// 	const cryptoList = useSelector((state) => state.drop.crypto.dropList);
// 	const currentCoin = useSelector((state) => state.drop.crypto.currentCoin);

// 	const chartType = useSelector((state) => state.drop.chartType.dropName);

// 	const timePeriod = useSelector((state) => state.drop.timePeriod.time);
//     const chartRange = useSelector((state) => state.drop.timePeriod.range);
//     const timePeriodList = useSelector(
//         (state) => state.drop.timePeriod.timePeriodList
//     );

//     const searchList = useSelector((state) => state.drop.coinSearch.dropList);
//     const coinSearchName = useSelector((state) => state.drop.coinSearch.dropName);

//     const sellDropName = useSelector((state) => state.drop.sell.dropName);
//     const sellList = useSelector((state) => state.drop.sell.dropList);
//     const sellCoin = useSelector((state) => state.drop.sell.coin);

//     const buyDropName = useSelector((state) => state.drop.buy.dropName);
//     const buyList = useSelector((state) => state.drop.buy.dropList);
//     const buyCoin = useSelector((state) => state.drop.buy.coin);
//     const phoneMenuItems = useSelector(
//         (state) => state.drop.phoneMenu.phoneMenuList
//     );
//     const phoneMenuPath = useSelector((state) => state.drop.phoneMenu.path);
    
//     const chart = useSelector((state) => state.chart);
//     const chartList = useSelector((state) => state.chart.chartList);

// 	const firstchartitem = chartList[0];
// 	const secondchartitem = chartList[1];
//     const coins = useSelector((state) => state.coins);
// 	const alert = useSelector((state) => state.alert);
// 	const theme = useSelector((state) => state.theme);
// 	const chartDisplay = useSelector((state) => state.phone.chartDisplay);
// 	const WatchList = useSelector((state) => state.watch.list);
// 	const recentList = useSelector((state) => state.recent);
// 	const PieItem = useSelector((state) => state.pieItem);

// 	return {
// 		currency,
// 		alert,
// 		theme,
// 		cryptoDropName,
// 		cryptoList,
// 		chartType,
// 		chartDisplay,
// 		firstchartitem,
// 		secondchartitem,
// 		timePeriod,
// 		currentCoin,
// 		timePeriodList,
// 		chart,
// 		coins,
// 		currencySymbol,
// 		WatchList,
// 		currencyList,
// 		currencyDropName,
// 		chartRange,
// 		recentList,
// 		chartList,
// 		searchList,
// 		coinSearchName,
// 		sellDropName,
// 		sellList,
// 		sellCoin,
// 		buyDropName,
// 		buyList,
// 		buyCoin,
// 		phoneMenuItems,
// 		phoneMenuPath,
// 		PieItem,
// 	};
// };