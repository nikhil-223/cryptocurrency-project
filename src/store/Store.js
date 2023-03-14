import { configureStore } from "@reduxjs/toolkit";

import { ChartSlice, CoinSlice, CurrencySlice, ThemeSlice,PieItemSlice } from "./slices";

const store = configureStore({
	reducer: {
		coins: CoinSlice,
		chart: ChartSlice,
		theme: ThemeSlice,
		currency: CurrencySlice,
		pieItem: PieItemSlice,
	},
});

export default store;
