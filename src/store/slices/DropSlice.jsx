import { createSlice } from "@reduxjs/toolkit";

const DropSlice = createSlice({
	name: "drop",
	initialState: {
		currency: {
			dropName: "Usd ($)",
			currency: "usd",
			symbol: "$",
			dropList: [],
		},
		timePeriod: {
			time: 1,
		},
		crypto: {
			dropName: "Bitcoin",
			dropList: [],
			currentCoin: "bitcoin",
		},
		chartType: {
			dropName: "Line",
			currentChartType: "Line",
			dropList: [],
		},
		sell: {
			dropName: "Bitcoin",
			coin: "Bitcoin",
			dropList: [],
		},
		buy: {
			dropName: "Ethereum",
			coin: "Ethereum",
			dropList: [],
		},
		coinSearch: {
			dropName: "",
			dropList: [],
		},
	},
	reducers: {
		// currency drop
		setSymbol(state, action) {
			state.currency.symbol = action.payload;
		},
		setCurrency(state, action) {
			state.currency.currency = action.payload;
		},
		setCurrencyDropdownName(state, action) {
			state.currency.dropName = action.payload;
		},

		// crypto drop
		setCurrentCoin(state, action) {
			state.crypto.currentCoin = action.payload.toLowerCase();
		},
		setCryptoDropName(state, action) {
			state.crypto.dropName = action.payload
				.charAt(0)
				.toUpperCase()
				.concat(action.payload.slice(1));
			action.payload.toLowerCase();
		},

		// sell drop
		setSellDropName(state, action) {
			state.sell.dropName = action.payload;
		},
		setSellList(state, action) {
			state.sell.dropList = action.payload;
		},
		setSellCoin(state, action) {
			state.sell.coin = action.payload;
		},
		// buy drop
		setBuyDropName(state, action) {
			state.buy.dropName = action.payload;
		},
		setBuyList(state, action) {
			state.buy.dropList = action.payload;
		},
		setBuyCoin(state, action) {
			state.buy.coin = action.payload;
		},

		// time period
		setTimePeriod(state, action) {
			state.timePeriod.time = action.payload;
		},

		// coin search
		setCoinSearchName(state, action) {
			state.coinSearch.dropName = action.payload;
		},
		setSearchList(state, action) {
			state.coinSearch.dropList = action.payload;
		},
	},
});

export default DropSlice.reducer;
export const {
	setCurrency,
	setSymbol,
	setCurrencyDropdownName,
	setCurrentCoin,
	setCryptoDropName,
	setTimePeriod,
	setCoinSearchName,
	setSearchList,
	setSellDropName,
	setSellList,
	setBuyDropName,
	setBuyList,
	setSellCoin,
	setBuyCoin
} = DropSlice.actions;
