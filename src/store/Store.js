import { configureStore } from "@reduxjs/toolkit";
import { ChartSlice, CoinSlice, CurrencySlice, ThemeSlice } from "./slices";

const store = configureStore({
	reducer: {
		coins: CoinSlice,
		chart: ChartSlice,
		theme: ThemeSlice,
		currency: CurrencySlice,
	},
});

export default store;
