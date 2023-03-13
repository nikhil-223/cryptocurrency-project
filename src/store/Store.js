import { configureStore } from "@reduxjs/toolkit";
import ChartSlice from "./slices/ChartSlice";
import CoinSlice from "./slices/CoinSlice";

const store = configureStore({
	reducer: {
		coins: CoinSlice,
		chart: ChartSlice,
	},
});

export default store;
