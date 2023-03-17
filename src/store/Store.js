import { configureStore } from "@reduxjs/toolkit";

import { ChartSlice, CoinSlice, DropSlice, ThemeSlice,PieItemSlice, AlertSlice } from "./slices";
import RecentSlice from "./slices/RecentSlice";

const store = configureStore({
	reducer: {
		coins: CoinSlice,
		chart: ChartSlice,
		theme: ThemeSlice,
		alert:AlertSlice,
		drop: DropSlice,
		pieItem: PieItemSlice,
		recent:RecentSlice
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
