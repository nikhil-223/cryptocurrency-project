import { createSlice } from "@reduxjs/toolkit";

const DropSlice = createSlice({
	name: "drop",
	initialState: {
		currency: {
			dropName: "Usd ($)",
			currency: "usd",
			symbol: "$",
		},
		timePeriod: {
			time: 1,
		},
		crypto: {
			dropName: "Bitcoin",
			currentCoin: "bitcoin",
		},
		chartType: {
			dropName: "Line",
			currentChartType: "Line",
			dropList: [],
		},
		coinSearch: {
			dropName: "",
			searchList: [],
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

		// time period
		setTimePeriod(state, action) {
			state.timePeriod.time = action.payload;
		},

		// coin search
		setCoinSearchName(state, action) {
			state.coinSearch.dropName = action.payload;
		},
		setSearchList(state, action) {
			state.coinSearch.searchList = action.payload;
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
} = DropSlice.actions;
