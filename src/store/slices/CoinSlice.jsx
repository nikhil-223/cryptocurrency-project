import { createSlice } from "@reduxjs/toolkit";
import { getCoins } from "../../api";

const CoinSlice = createSlice({
	name: "coins",
	initialState: {
		isLoading: false,
		data: [],
		isError:false,
	},
	extraReducers: (builder) => {
		builder.addCase(getCoins.fulfilled, (state, action) => {
			state.isLoading=false;
			state.data=action.payload;
		});
		builder.addCase(getCoins.pending, (state, action) => {
			state.isLoading=true;
		});
		builder.addCase(getCoins.rejected, (state, action) => {
			console.log('Error',action.payload);
			state.isError=true
		});
	},
});

export default CoinSlice.reducer;
