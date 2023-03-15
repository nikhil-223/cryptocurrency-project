import { createSlice } from "@reduxjs/toolkit";

const CurrencySlice = createSlice({
	name: "currency",
	initialState: {
		currencyDropdownName: "Usd ($)",
		currency: "usd",
		symbol: "$",
	},
	reducers: {
		setSymbol(state, action) {
			state.symbol = action.payload;
		},
		setCurrency(state, action) {
			state.currency = action.payload;
		},
		setCurrencyDropdownName(state, action) {
			state.currencyDropdownName = action.payload;
		},
	},
});

export default CurrencySlice.reducer;
export const { setCurrency, setSymbol, setCurrencyDropdownName } =
	CurrencySlice.actions;
