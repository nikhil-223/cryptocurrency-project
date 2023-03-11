import { configureStore } from "@reduxjs/toolkit";
import CoinSlice from "./slices/CoinSlice";

const store = configureStore({
	reducer: {
		coins: CoinSlice,
	},
});

export default store;
