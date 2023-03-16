import { configureStore } from "@reduxjs/toolkit";

import { ChartSlice, CoinSlice, DropSlice, ThemeSlice,PieItemSlice } from "./slices";

const store = configureStore({
	reducer: {
		coins: CoinSlice,
		chart: ChartSlice,
		theme: ThemeSlice,
		drop: DropSlice,
		pieItem: PieItemSlice,
	},
});

export default store;
