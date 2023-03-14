import { configureStore } from "@reduxjs/toolkit";
import ChartSlice from "./slices/ChartSlice";
import CoinSlice from "./slices/CoinSlice";
import ThemeSlice from "./slices/ThemeSlice";
import PieItemSlice from "./slices/PieItemSlice";
const store = configureStore({
	reducer: {
		coins: CoinSlice,
		chart: ChartSlice,
		theme: ThemeSlice,
		pieItem: PieItemSlice,
	},
});

export default store;
