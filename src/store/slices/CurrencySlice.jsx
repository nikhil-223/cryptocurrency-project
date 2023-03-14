import { createSlice } from "@reduxjs/toolkit";
import { getCurrencies } from "../../api";

const CurrencySlice = createSlice({
	name: "currency",
	initialState: {
		isLoading: false,
		data: [],
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(getCurrencies.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(getCurrencies.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getCurrencies.rejected, (state, action) => {
			state.isError = true;
		});
	},
});

export default CurrencySlice.reducer;
