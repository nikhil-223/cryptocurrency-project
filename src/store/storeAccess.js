
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
			chartType: { dropName: chartType, currentChartType },
			timePeriod: { time: timePeriod, range: chartRange, timePeriodList },
			sell: { dropName: sellDropName, dropList: sellList, coin: sellCoin },
			buy: { dropName: buyDropName, dropList: buyList, coin: buyCoin },
			coinSearch: { dropName: coinSearchName, dropList: searchList },
			phoneMenu: { phoneMenuList: phoneMenuItems, path: phoneMenuPath },
		},
		alert,
		theme,
		chart: { chartList,reload:chartReload },
		coins,
		phone: { chartDisplay },
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
		currentChartType,
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
		chartReload,
	};
};


