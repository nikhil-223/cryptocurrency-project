import { configureStore } from "@reduxjs/toolkit";
import ChartSlice from "./slices/ChartSlice";
import CoinSlice from "./slices/CoinSlice";
import ThemeSlice from "./slices/ThemeSlice";

const store = configureStore({
	reducer: {
		coins: CoinSlice,
		chart: ChartSlice,
		theme: ThemeSlice,
	},
});

export default store;
